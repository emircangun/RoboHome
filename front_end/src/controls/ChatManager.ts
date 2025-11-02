import Anthropic from '@anthropic-ai/sdk';
import { TechnologyManager } from './TechnologyManager';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export class ChatManager {
  private messages: ChatMessage[] = [];
  private chatContainer: HTMLElement | null = null;
  private messagesContainer: HTMLElement | null = null;
  private inputField: HTMLInputElement | null = null;
  private sendButton: HTMLButtonElement | null = null;
  private anthropic: Anthropic | null = null;
  private technologyManager: TechnologyManager | null = null;

  constructor(technologyManager?: TechnologyManager) {
    this.technologyManager = technologyManager || null;
    // Initialize Anthropic client
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    if (apiKey) {
      this.anthropic = new Anthropic({
        apiKey: apiKey,
      });
    } else {
      console.warn('Anthropic API key not found. Set VITE_ANTHROPIC_API_KEY in your .env file.');
    }

    // Chat container is now inside the sidebar
    this.chatContainer = document.getElementById('chat-container');
    if (!this.chatContainer) {
      console.error('Chat container not found - element with id "chat-container" does not exist');
      return;
    }
    this.setupChat();
    this.addWelcomeMessage();
  }

  private setupChat(): void {
    if (!this.chatContainer) return;
    
    // Create chat UI structure
    this.chatContainer.innerHTML = `
      <div class="chat-header">
        <h3>Assistant</h3>
      </div>
      <div class="chat-messages" id="chat-messages"></div>
      <div class="chat-input-container">
        <input 
          type="text" 
          id="chat-input" 
          class="chat-input" 
          placeholder="Type your prompt request..."
          autocomplete="off"
        />
        <button id="chat-send-btn" class="chat-send-btn">Send</button>
      </div>
    `;

    this.messagesContainer = document.getElementById('chat-messages')!;
    this.inputField = document.getElementById('chat-input') as HTMLInputElement;
    this.sendButton = document.getElementById('chat-send-btn') as HTMLButtonElement;

    // Event listeners
    this.sendButton.addEventListener('click', () => this.handleSend());
    this.inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSend();
      }
    });

    // Auto-focus input
    this.inputField.focus();
  }

  private addWelcomeMessage(): void {
    this.addMessage('assistant', 'Hello! How can I help you with your room design today?');
  }

  private handleSend(): void {
    if (!this.inputField) return;
    const message = this.inputField.value.trim();
    if (!message) return;

    // Check if message contains a tag command before processing
    const tagResult = this.processTagCommand(message);
    if (tagResult.handled) {
      // Tag command was processed, show response
      this.addMessage('user', message);
      if (this.inputField) {
        this.inputField.value = '';
      }
      this.addMessage('assistant', tagResult.response);
      return;
    }

    // Add user message
    this.addMessage('user', message);
    if (this.inputField) {
      this.inputField.value = '';
    }

    // Simulate assistant response (you can integrate with an AI API later)
    this.simulateResponse(message);
  }

  private processTagCommand(message: string): { handled: boolean; response: string } {
    // Pattern to match: "detect the [item] and add the tag [tag]" or variations
    const lowerMessage = message.toLowerCase();
    
    // Patterns to match:
    // - "detect the bag and add the tag bag"
    // - "detect [item] and add tag [tag]"
    // - "add tag [tag]"
    // - "tag [item] as [tag]"
    
    let tagMatch: string | null = null;
    
    // Pattern 1: "detect the [item] and add the tag [tag]"
    const pattern1 = /detect\s+(?:the\s+)?(\w+)\s+and\s+add\s+(?:the\s+)?tag\s+(\w+)/i;
    const match1 = message.match(pattern1);
    if (match1) {
      tagMatch = match1[2]; // Use the tag from the command
    }
    
    // Pattern 2: "add tag [tag]" or "add the tag [tag]"
    if (!tagMatch) {
      const pattern2 = /add\s+(?:the\s+)?tag\s+(\w+)/i;
      const match2 = message.match(pattern2);
      if (match2) {
        tagMatch = match2[1];
      }
    }
    
    // Pattern 3: "tag [item] as [tag]"
    if (!tagMatch) {
      const pattern3 = /tag\s+(\w+)\s+as\s+(\w+)/i;
      const match3 = message.match(pattern3);
      if (match3) {
        tagMatch = match3[2];
      }
    }

    if (tagMatch && this.technologyManager) {
      const success = this.technologyManager.addTag(tagMatch);
      if (success) {
        return {
          handled: true,
          response: `Tag "${tagMatch}" has been added to the Technology menu.`
        };
      } else {
        return {
          handled: true,
          response: `Tag "${tagMatch}" already exists in the Technology menu.`
        };
      }
    }

    return { handled: false, response: '' };
  }

  private async simulateResponse(userMessage: string): Promise<void> {
    // Show typing indicator
    const typingId = this.showTypingIndicator();

    try {
      let response: string;

      if (this.anthropic) {
        // Use Anthropic API
        response = await this.getAnthropicResponse(userMessage);
      } else {
        // Fallback to simple response if API key not configured
        response = await this.getFallbackResponse(userMessage);
      }

      this.removeTypingIndicator(typingId);
      this.addMessage('assistant', response);
    } catch (error) {
      console.error('Error getting AI response:', error);
      this.removeTypingIndicator(typingId);
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      this.addMessage('assistant', `Sorry, I encountered an error: ${errorMessage}. Please make sure your Anthropic API key is configured correctly.`);
    }
  }

  private async getAnthropicResponse(userMessage: string): Promise<string> {
    if (!this.anthropic) {
      throw new Error('Anthropic client not initialized');
    }

    // Convert our message format to Anthropic format
    const systemPrompt = `You are a helpful assistant for a 3D room design application. 
    You help users with room design, furniture placement, scene modifications, and general questions about the application.
    Be concise, helpful, and friendly.`;

    // Build conversation history in Anthropic format
    const conversationMessages = this.messages
      .slice(-10) // Keep last 10 messages for context
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

    const response = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: systemPrompt,
      messages: conversationMessages
    });

    // Extract text content from response
    const textContent = response.content.find((block: any) => block.type === 'text');
    return textContent?.text || 'I apologize, but I could not generate a response.';
  }

  private async getFallbackResponse(userMessage: string): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generate response based on keywords (fallback when API not configured)
    let response = "I understand you're asking about: " + userMessage + ". ";
    
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('table') || lowerMessage.includes('furniture')) {
      response += "You can add tables using the controls in the sidebar. Would you like help placing furniture?";
    } else if (lowerMessage.includes('room') || lowerMessage.includes('scene')) {
      response += "The 3D scene is automatically loaded. You can navigate using WASD keys and mouse look.";
    } else if (lowerMessage.includes('color') || lowerMessage.includes('change')) {
      response += "You can modify colors and properties in the table configuration panel.";
    } else {
      response += "I'm here to help with room design. You can ask about adding furniture, modifying the scene, or other features.";
    }

    return response;
  }

  private addMessage(role: 'user' | 'assistant', content: string): void {
    const message: ChatMessage = {
      role,
      content,
      timestamp: new Date()
    };

    this.messages.push(message);
    this.renderMessage(message);
    this.scrollToBottom();
  }

  private renderMessage(message: ChatMessage): void {
    if (!this.messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message chat-message-${message.role}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'chat-message-content';
    contentDiv.textContent = message.content;

    messageDiv.appendChild(contentDiv);
    this.messagesContainer.appendChild(messageDiv);
  }

  private showTypingIndicator(): string {
    if (!this.messagesContainer) return '';
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message chat-message-assistant chat-typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
      <div class="chat-message-content">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
    return 'typing-indicator';
  }

  private removeTypingIndicator(id: string): void {
    const indicator = document.getElementById(id);
    if (indicator) {
      indicator.remove();
    }
  }

  private scrollToBottom(): void {
    if (!this.messagesContainer) return;
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  public getMessages(): ChatMessage[] {
    return [...this.messages];
  }

  public clearChat(): void {
    this.messages = [];
    if (this.messagesContainer) {
      this.messagesContainer.innerHTML = '';
    }
    this.addWelcomeMessage();
  }
}
