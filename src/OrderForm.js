import React, { useState, useEffect } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [messages, setMessages] = useState([
    { text: 'Привет! Давай создадим твой идеальный сайт.', sender: 'bot', typing: true }
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
            { text: 'Как я могу к вам обращаться?', sender: 'bot', typing: true }
          ]);
        }, 1000);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [messages, currentStep]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    
    if (currentStep === 'name') {
      setFormData({ ...formData, name: inputValue });
      setCurrentStep('telegram');
      newMessages.push(
        { text: `Приятно познакомиться, ${inputValue}!`, sender: 'bot', typing: true },
        { text: 'Какой ваш Telegram username? (без @)', sender: 'bot', typing: true }
      );
    } 
    else if (currentStep === 'telegram') {
      setFormData({ ...formData, telegram: inputValue });
      setCurrentStep('description');
      newMessages.push(
        { text: 'Дайте краткое описание:', sender: 'bot', typing: true }
      );
    }
    else if (currentStep === 'description') {
      setFormData({ ...formData, description: inputValue });
      newMessages.push(
        { text: 'Подтвердите данные:', sender: 'bot', typing: true },
        { text: `Имя: ${formData.name}\nTelegram: @${formData.telegram}\nОписание: ${inputValue}`, sender: 'bot', typing: true }
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
        { text: 'Yes', sender: 'user' },
        { text: 'Отлично! Заявка отправлена.', sender: 'bot', typing: true },
        { text: 'Я свяжусь с вами в Telegram в ближайшее время.', sender: 'bot', typing: true }
      );
      sendToTelegram();
      setCurrentStep('complete');
    } else {
      newMessages.push(
        { text: 'No', sender: 'user' },
        { text: 'Хорошо, начнем заново. Как вас зовут?', sender: 'bot', typing: true }
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
      
      const message = `📌 Новая заявка на сайт!\n\n` +
        `👤 Имя: ${formData.name}\n` +
        `📱 Telegram: @${formData.telegram}\n` +
        `📝 Описание:\n${formData.description}`;

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
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSending(false);
    }
  };
  
  const startOrder = () => {
    setShowTerminal(true);
    setMessages([{ text: 'Привет! Давай создадим твой идеальный сайт.', sender: 'bot', typing: true }]);
    setCurrentStep('greeting');
  };
  
  if (!showTerminal) {
    return (
      <div className="order-init-container">
        <div className="order-init-content">
          <h2>Хочешь заказать сайт?</h2>
          <p>Давай сделаем это в интерактивном режиме!</p>
          <button onClick={startOrder} className="start-order-btn">
            Начать заказ
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
                Yes
              </button>
              <span className="confirmation-slash">/</span>
              <button 
                onClick={() => handleConfirmation(false)} 
                className="confirm-btn no"
              >
                No
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