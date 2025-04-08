import React, { useState, useEffect } from 'react';
import './OrderForm.css';
import { useTranslation } from 'react-i18next';

const OrderForm = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    { text: t('order_form.greeting'), sender: 'bot', typing: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState('greeting');
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    description: '',
    projectType: 'landing'
  });
  const [isSending, setIsSending] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.typing ? { ...msg, typing: false } : msg
      ));
      
      if (currentStep === 'greeting') {
        setTimeout(() => {
          setCurrentStep('name');
          setMessages(prev => [...prev, 
            { text: t('order_form.ask_name'), sender: 'bot', typing: true }
          ]);
        }, 1000);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [messages, currentStep, t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    
    if (currentStep === 'name') {
      setFormData({ ...formData, name: inputValue });
      setCurrentStep('telegram');
      newMessages.push(
        { text: t('order_form.greet_user', { name: inputValue }), sender: 'bot', typing: true },
        { text: t('order_form.ask_telegram'), sender: 'bot', typing: true }
      );
    } 
    else if (currentStep === 'telegram') {
      setFormData({ ...formData, telegram: inputValue });
      setCurrentStep('description');
      newMessages.push(
        { text: t('order_form.ask_description'), sender: 'bot', typing: true }
      );
    }
    else if (currentStep === 'description') {
      setFormData({ ...formData, description: inputValue });
      newMessages.push(
        { text: t('order_form.confirm_data'), sender: 'bot', typing: true },
        { 
          text: `${t('order_form.name')}: ${formData.name}\n${t('order_form.telegram')}: @${formData.telegram}\n${t('order_form.description')}: ${inputValue}`, 
          sender: 'bot', 
          typing: true 
        }
      );
      setShowConfirmation(true);
    }
    
    setMessages(newMessages);
    setInputValue('');
  };

  const handleConfirmation = (confirmed) => {
    const newMessages = [...messages];
    
    if (confirmed) {
      newMessages.push(
        { text: t('order_form.confirm_yes'), sender: 'user' },
        { text: t('order_form.success_message'), sender: 'bot', typing: true },
        { text: t('order_form.telegram_contact'), sender: 'bot', typing: true }
      );
      sendToTelegram();
      setCurrentStep('complete');
    } else {
      newMessages.push(
        { text: t('order_form.confirm_no'), sender: 'user' },
        { text: t('order_form.restart'), sender: 'bot', typing: true }
      );
      setCurrentStep('name');
      setFormData({ name: '', telegram: '', description: '', projectType: 'landing' });
    }
    
    setMessages(newMessages);
    setShowConfirmation(false);
  };

  const sendToTelegram = async () => {
    setIsSending(true);
    try {
      const botToken = '8059841339:AAFW6m-7Ldpw_5F8-T3PDk6J_nutyNvFaaE';
      const chatId = '6992362772';
      
      const message = `${t('order_form.new_application')}\n\n` +
        `👤 ${t('order_form.name')}: ${formData.name}\n` +
        `📱 ${t('order_form.telegram')}: @${formData.telegram}\n` +
        `📝 ${t('order_form.description')}:\n${formData.description}`;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });
    } catch (error) {
      console.error(t('error_sending'), error);
    } finally {
      setIsSending(false);
    }
  };
  
  const startOrder = () => {
    setShowTerminal(true);
    setMessages([{ text: t('order_form.greeting'), sender: 'bot', typing: true }]);
    setCurrentStep('greeting');
  };
  
  if (!showTerminal) {
    return (
      <div className="order-init-container">
        <div className="order-init-content">
          <h2>{t('order_form.welcome_title')}</h2>
          <p>{t('order_form.interactive_prompt')}</p>
          <button onClick={startOrder} className="start-order-btn">
            {t('order_form.start_order')}
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn red"></span>
          <span className="terminal-btn yellow"></span>
          <span className="terminal-btn green"></span>
        </div>
        <div className="terminal-title">SDDAD</div>
      </div>
      
      <div className="terminal-body">
        <div className="terminal-content">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.typing ? (
                <span className="typing-indicator">
                  <span>•</span>
                  <span>•</span>
                  <span>•</span>
                </span>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
              )}
            </div>
          ))}
          
          {showConfirmation && (
            <div className="confirmation-buttons">
              <button 
                onClick={() => handleConfirmation(true)} 
                className="confirm-btn yes"
              >
                {t('order_form.confirm_yes')}
              </button>
              <span className="confirmation-slash">/</span>
              <button 
                onClick={() => handleConfirmation(false)} 
                className="confirm-btn no"
              >
                {t('order_form.confirm_no')}
              </button>
            </div>
          )}
          
          {currentStep !== 'complete' && !showConfirmation && (
            <form onSubmit={handleSubmit} className="terminal-input">
              <span className="prompt">{'>>>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
                disabled={isSending || messages.some(m => m.typing)}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;