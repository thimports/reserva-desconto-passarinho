import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Confetti } from './Confetti';
import { SoundManager } from './SoundManager';
import { Footer } from '@/components/Footer';
import { AppDownloadBanner } from '@/components/AppDownloadBanner';
import birdMascot from '@/assets/reserva-bird-mascot.png';
import quizNetshoesLogo from '/lovable-uploads/d4e7fb9b-ecc9-46e8-82d4-c1590ce67235.png';
import quizImage1 from '/lovable-uploads/79edcbfc-172c-46ea-b6b3-d11fe56ee8d8.png';
import quizImage2 from '@/assets/quiz-question-2.jpg';
import quizImage3 from '@/assets/quiz-question-3.jpg';
import quizImage4 from '@/assets/quiz-question-4.jpg';
import quizImage5 from '@/assets/quiz-question-5.jpg';
import quizImage6 from '@/assets/quiz-question-6.jpg';
import { Trophy, Star, Gift, Sparkles, ChevronRight, Share2, ShoppingBag, Volume2, VolumeX } from 'lucide-react';
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}
const questions: Question[] = [{
  id: 1,
  question: "Qual é a cor principal do logo da Netshoes?",
  options: ["Roxo", "Amarelo", "Vermelho", "Azul"],
  correctAnswer: 0,
  explanation: "Isso mesmo! O roxo é a cor especial da Netshoes! 💜"
}, {
  id: 2,
  question: "Qual marca tem um símbolo que parece um 'risquinho'?",
  options: ["Adidas", "Nike", "Puma", "Reebok"],
  correctAnswer: 1,
  explanation: "Correto! A Nike tem o famoso 'swoosh' que parece um risquinho! ✅"
}, {
  id: 3,
  question: "Quantos risquinhos tem no logo da Adidas?",
  options: ["Um", "Dois", "Três", "Quatro"],
  correctAnswer: 2,
  explanation: "Perfeito! A Adidas tem três listras famosas! 🏃‍♂️"
}, {
  id: 4,
  question: "A Netshoes vende o quê?",
  options: ["Comida", "Tênis e roupas esportivas", "Carros", "Livros"],
  correctAnswer: 1,
  explanation: "Isso aí! A Netshoes é especialista em tênis e roupas de esporte! 👟"
}, {
  id: 5,
  question: "Onde você pode comprar produtos da Netshoes?",
  options: ["Só na loja física", "Só no telefone", "Na internet também", "Só no shopping"],
  correctAnswer: 2,
  explanation: "Correto! Você pode comprar na Netshoes pela internet, é super fácil! 🖥️"
}, {
  id: 6,
  question: "Qual dessas marcas famosas você encontra na Netshoes?",
  options: ["Nike e Adidas", "Só Nike", "Só Adidas", "Nenhuma delas"],
  correctAnswer: 0,
  explanation: "Perfeito! Na Netshoes você encontra Nike, Adidas e muitas outras marcas incríveis! 🌟"
}];
const quizImages = [quizImage1, quizImage2, quizImage3, quizImage4, quizImage5, quizImage6];
export const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const progress = (currentQuestion + (showResult ? 1 : 0)) / questions.length * 100;
  const currentDiscount = Math.min((currentQuestion + (showResult ? 1 : 0)) * 10, 60);
  useEffect(() => {
    if (showResult) {
      setDiscount(currentDiscount);
      setShowConfetti(true);
      if (currentQuestion === questions.length - 1) {
        setGameCompleted(true);
      }
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [showResult, currentQuestion, currentDiscount]);
  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };
  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    setAnsweredCorrectly(isCorrect);
    setShowResult(true);
    if (soundEnabled) {
      setTimeout(() => {
        if (isCorrect) {
          (window as any).playSuccessSound?.();
        } else {
          (window as any).playErrorSound?.();
        }
      }, 100);
    }
  };
  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnsweredCorrectly(false);
    }
  };
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setDiscount(0);
    setGameCompleted(false);
    setShowConfetti(false);
    setAnsweredCorrectly(false);
  };
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };
  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quiz Netshoes - Consegui desconto incrível!',
        text: `Acabei de conquistar ${discount}% de desconto no Quiz da Netshoes! 🏃‍♂️`,
        url: window.location.href
      });
    }
  };
  const goToStore = () => {
    window.open('https://www.netshoes.com.br/', '_blank');
  };
  if (gameCompleted) {
    return <>
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-netshoes-purple-dark flex items-center justify-center p-2 sm:p-4">
        {showConfetti && <Confetti />}
        <SoundManager enabled={soundEnabled} />
        
        <Card className="w-full max-w-2xl p-4 sm:p-6 md:p-8 text-center quiz-celebration">
          <div className="space-y-6">
            <div className="quiz-bounce">
              <Trophy className="w-20 h-20 mx-auto text-primary mb-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-netshoes-black mb-2">
                PARABÉNS! 🎉
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-netshoes-gray mb-4 sm:mb-6">
                Você desbloqueou
              </p>
              
              <div className="discount-grow">
                <Badge className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-celebration">
                  {discount}% OFF
                </Badge>
              </div>
            </div>

            <div className="bg-netshoes-light-gray rounded-2xl p-6 space-y-4">
              <Sparkles className="w-8 h-8 mx-auto text-primary" />
              <p className="text-lg font-bold text-netshoes-black">
                Você conhece muito bem a Netshoes! 
              </p>
              <p className="text-netshoes-gray">
                Agora é só usar seu desconto e arrasar com o estilo esportivo! 🏃‍♂️
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="store" size="xl" onClick={goToStore} className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                IR PARA A LOJA
              </Button>
              
              <Button variant="outline" size="xl" onClick={shareResult} className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                COMPARTILHAR
              </Button>
            </div>

            <Button variant="ghost" onClick={handleRestart} className="text-netshoes-gray hover:text-netshoes-black">
              Jogar novamente
            </Button>
          </div>
        </Card>
      </div>
      <AppDownloadBanner />
      <Footer />
    </>;
  }
  return <>
    <div className="min-h-screen bg-gradient-to-br from-background via-netshoes-light-gray to-background flex items-center justify-center p-2 sm:p-4">
      {showConfetti && <Confetti />}
      <SoundManager enabled={soundEnabled} />
      
      <div className="w-full max-w-2xl space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          {/* Logo interativa Quiz Netshoes */}
          <div className="flex justify-center mb-6">
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 active:scale-95">
              <img src={quizNetshoesLogo} alt="Quiz Netshoes Logo" className="h-12 sm:h-16 w-auto rounded-lg shadow-soft group-hover:shadow-celebration transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg" onClick={() => window.open('https://www.netshoes.com.br/', '_blank')} />
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="quiz-bounce">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              
            </div>
            <p className="text-base sm:text-lg text-netshoes-gray">A cada resposta certa, você ganha 10% OFF. Complete tudo e aproveite até 60% de desconto no site oficial Netshoes! 🏃‍♂️</p>
          </div>
          
          {/* Sound Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleSound} className="absolute top-2 right-2 sm:top-4 sm:right-4">
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-netshoes-gray">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <Badge variant="secondary" className="font-bold">
              {currentDiscount}% OFF
            </Badge>
          </div>
          <Progress value={progress} className="h-3 progress-fill" />
        </div>

        {/* Quiz Card */}
        <Card className="p-4 sm:p-6 md:p-8 shadow-medium">
          {!showResult ? <div className="space-y-6">
              {/* Imagem dinâmica da pergunta */}
              <div className="flex justify-center mb-6">
                <div className="quiz-bounce">
                  <img src={quizImages[currentQuestion]} alt={`Ilustração da pergunta ${currentQuestion + 1}`} className="w-full max-w-md h-48 object-cover rounded-xl shadow-medium transition-all duration-500 hover:scale-105 hover:shadow-celebration" />
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-netshoes-black mb-4 sm:mb-6">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => <Button key={index} variant="quiz-answer" size="lg" onClick={() => handleAnswerSelect(index)} className={`text-left justify-start h-auto py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base ${selectedAnswer === index ? 'border-primary bg-primary/10 ring-2 ring-primary ring-offset-2' : ''}`}>
                    <span className="font-bold text-primary mr-3">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </Button>)}
              </div>

              <Button variant="quiz" size="xl" onClick={handleNextQuestion} disabled={selectedAnswer === null} className="w-full">
                CONFIRMAR RESPOSTA
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div> : <div className="text-center space-y-6">
              <div className={answeredCorrectly ? 'quiz-celebration' : 'quiz-shake'}>
                {answeredCorrectly ? <div className="space-y-4">
                    <Star className="w-16 h-16 mx-auto text-primary" />
                    <h3 className="text-2xl font-black text-netshoes-black">
                      ACERTOU! 🎉
                    </h3>
                    <div className="discount-grow">
                      <Badge className="text-3xl font-black bg-gradient-primary text-white px-6 py-3 rounded-xl">
                        +10% OFF
                      </Badge>
                    </div>
                  </div> : <div className="space-y-4">
                    <Gift className="w-16 h-16 mx-auto text-netshoes-gray" />
                    <h3 className="text-2xl font-black text-netshoes-black">
                      Quase lá! 
                    </h3>
                    <p className="text-netshoes-gray">Mas você ainda ganha desconto!</p>
                  </div>}
              </div>

              {questions[currentQuestion].explanation && <div className="bg-netshoes-light-gray rounded-xl p-4">
                  <p className="text-netshoes-black font-medium">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>}

              <div className="space-y-3">
                <div className="text-sm text-netshoes-gray">
                  Seu desconto atual:
                </div>
                <Badge className="text-2xl font-black bg-primary text-white px-4 py-2 rounded-lg">
                  {currentDiscount}% OFF
                </Badge>
              </div>

              <Button variant="quiz" size="xl" onClick={handleContinue} className="w-full">
                {currentQuestion === questions.length - 1 ? 'VER RESULTADO FINAL' : 'PRÓXIMA PERGUNTA'}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>}
        </Card>
      </div>
    </div>
    <AppDownloadBanner />
    <Footer />
  </>;
};