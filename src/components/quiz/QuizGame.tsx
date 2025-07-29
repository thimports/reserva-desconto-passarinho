import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Confetti } from './Confetti';
import { SoundManager } from './SoundManager';
import birdMascot from '@/assets/reserva-bird-mascot.png';
import { 
  Trophy, 
  Star, 
  Gift, 
  Sparkles, 
  ChevronRight,
  Share2,
  ShoppingBag,
  Volume2,
  VolumeX
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é o mascote icônico da Reserva?",
    options: ["Gato", "Passarinho", "Cachorro", "Peixe"],
    correctAnswer: 1,
    explanation: "O Passarinho é o símbolo mais querido da Reserva!"
  },
  {
    id: 2,
    question: "Em que peça a Reserva ficou famosa?",
    options: ["Calça", "Camisa", "Camiseta", "Bermuda"],
    correctAnswer: 2,
    explanation: "As camisetas com estampas criativas são a marca registrada da Reserva!"
  },
  {
    id: 3,
    question: "Quantos passarinhos aparecem no logo da Reserva?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "Um passarinho especial que representa toda a personalidade da marca!"
  },
  {
    id: 4,
    question: "Qual é o estilo característico das estampas da Reserva?",
    options: ["Sérias", "Divertidas", "Formais", "Tradicionais"],
    correctAnswer: 1,
    explanation: "As estampas divertidas e criativas são o DNA da Reserva!"
  },
  {
    id: 5,
    question: "Qual é o público principal da Reserva?",
    options: ["Crianças", "Jovens descolados", "Idosos", "Empresários"],
    correctAnswer: 1,
    explanation: "A Reserva é para quem tem personalidade e ama se expressar!"
  }
];

export const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;
  const currentDiscount = Math.min((currentQuestion + (showResult && answeredCorrectly ? 1 : 0)) * 20, 100);

  useEffect(() => {
    if (showResult && answeredCorrectly) {
      setDiscount(currentDiscount);
      setShowConfetti(true);
      
      if (currentQuestion === questions.length - 1) {
        setGameCompleted(true);
      }
      
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [showResult, answeredCorrectly, currentQuestion, currentDiscount]);

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
        title: 'Quiz Reserva - Consegui 100% de desconto!',
        text: `Acabei de conquistar ${discount}% de desconto no Quiz da Reserva! 🎉`,
        url: window.location.href,
      });
    }
  };

  const goToStore = () => {
    window.open('https://www.usereserva.com/', '_blank');
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-reserva-red-dark flex items-center justify-center p-4">
        {showConfetti && <Confetti />}
        <SoundManager enabled={soundEnabled} />
        
        <Card className="w-full max-w-2xl p-8 text-center quiz-celebration">
          <div className="space-y-6">
            <div className="quiz-bounce">
              <Trophy className="w-20 h-20 mx-auto text-primary mb-4" />
              <h1 className="text-4xl md:text-5xl font-black text-reserva-black mb-2">
                PARABÉNS! 🎉
              </h1>
              <p className="text-xl md:text-2xl text-reserva-gray mb-6">
                Você desbloqueou
              </p>
              
              <div className="discount-grow">
                <Badge className="text-6xl md:text-7xl font-black bg-gradient-primary text-white px-8 py-4 rounded-2xl shadow-celebration">
                  {discount}% OFF
                </Badge>
              </div>
            </div>

            <div className="bg-reserva-light-gray rounded-2xl p-6 space-y-4">
              <Sparkles className="w-8 h-8 mx-auto text-primary" />
              <p className="text-lg font-bold text-reserva-black">
                Você conhece muito bem a Reserva! 
              </p>
              <p className="text-reserva-gray">
                Agora é só usar seu desconto e arrasar com o estilo Reserva! 🕊️
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="celebration" 
                size="xl" 
                onClick={goToStore}
                className="flex items-center gap-2"
              >
                <ShoppingBag className="w-6 h-6" />
                IR PARA A LOJA
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                onClick={shareResult}
                className="flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                COMPARTILHAR
              </Button>
            </div>

            <Button 
              variant="ghost" 
              onClick={handleRestart}
              className="text-reserva-gray hover:text-reserva-black"
            >
              Jogar novamente
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-reserva-light-gray to-background flex items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <SoundManager enabled={soundEnabled} />
      
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="quiz-bounce">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src={birdMascot} 
                alt="Passarinho Reserva" 
                className="w-16 h-16 md:w-20 md:h-20 quiz-pulse"
              />
              <h1 className="text-3xl md:text-4xl font-black text-reserva-black">
                QUIZ <span className="gradient-text">RESERVA</span>
              </h1>
            </div>
            <p className="text-lg text-reserva-gray">
              Responda e ganhe descontos incríveis! 🕊️
            </p>
          </div>
          
          {/* Sound Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSound}
            className="absolute top-4 right-4"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-reserva-gray">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <Badge variant="secondary" className="font-bold">
              {currentDiscount}% OFF
            </Badge>
          </div>
          <Progress value={progress} className="h-3 progress-fill" />
        </div>

        {/* Quiz Card */}
        <Card className="p-6 md:p-8 shadow-medium">
          {!showResult ? (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-reserva-black mb-6">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="quiz-answer"
                    size="lg"
                    onClick={() => handleAnswerSelect(index)}
                    className={`text-left justify-start h-auto py-4 px-6 ${
                      selectedAnswer === index 
                        ? 'border-primary bg-primary/10 ring-2 ring-primary ring-offset-2' 
                        : ''
                    }`}
                  >
                    <span className="font-bold text-primary mr-3">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </Button>
                ))}
              </div>

              <Button
                variant="quiz"
                size="xl"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="w-full"
              >
                CONFIRMAR RESPOSTA
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className={answeredCorrectly ? 'quiz-celebration' : 'quiz-shake'}>
                {answeredCorrectly ? (
                  <div className="space-y-4">
                    <Star className="w-16 h-16 mx-auto text-primary" />
                    <h3 className="text-2xl font-black text-reserva-black">
                      ACERTOU! 🎉
                    </h3>
                    <div className="discount-grow">
                      <Badge className="text-3xl font-black bg-gradient-primary text-white px-6 py-3 rounded-xl">
                        +20% OFF
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Gift className="w-16 h-16 mx-auto text-reserva-gray" />
                    <h3 className="text-2xl font-black text-reserva-black">
                      Quase lá! 
                    </h3>
                    <p className="text-reserva-gray">Mas você ainda ganha desconto!</p>
                  </div>
                )}
              </div>

              {questions[currentQuestion].explanation && (
                <div className="bg-reserva-light-gray rounded-xl p-4">
                  <p className="text-reserva-black font-medium">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <div className="text-sm text-reserva-gray">
                  Seu desconto atual:
                </div>
                <Badge className="text-2xl font-black bg-primary text-white px-4 py-2 rounded-lg">
                  {currentDiscount}% OFF
                </Badge>
              </div>

              <Button
                variant="quiz"
                size="xl"
                onClick={handleContinue}
                className="w-full"
              >
                {currentQuestion === questions.length - 1 ? 'VER RESULTADO FINAL' : 'PRÓXIMA PERGUNTA'}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};