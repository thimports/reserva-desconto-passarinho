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
import netshoesLogo from '/lovable-uploads/05728d4a-c13c-4907-83ab-1743b9c3dcf3.png';
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
  question: "Em que ano a Netshoes foi fundada?",
  options: ["1999", "2000", "2001", "2002"],
  correctAnswer: 1,
  explanation: "A Netshoes foi fundada em 2000 e se tornou referência em e-commerce esportivo!"
}, {
  id: 2,
  question: "Qual é o foco principal da Netshoes?",
  options: ["Roupas Casuais", "Artigos Esportivos", "Eletrônicos", "Casa e Decoração"],
  correctAnswer: 1,
  explanation: "A Netshoes é especializada em artigos esportivos e lifestyle!"
}, {
  id: 3,
  question: "Qual marca é famosa por suas parcerias com a Netshoes?",
  options: ["Nike", "Adidas", "Puma", "Todas as anteriores"],
  correctAnswer: 3,
  explanation: "A Netshoes trabalha com todas as principais marcas esportivas do mundo!"
}];

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
  const currentDiscount = Math.min((currentQuestion + (showResult ? 1 : 0)) * 20, 60);

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
          <div className="quiz-bounce">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-netshoes-black">
                QUIZ <span className="gradient-text">NETSHOES</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg text-netshoes-gray">
              Responda e ganhe descontos incríveis! 🏃‍♂️
            </p>
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
                        +20% OFF
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
