import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [reviews, setReviews] = useState<{ [key: string]: string }>({});

  const eventInfo = {
    date: "15 марта 2025",
    time: "09:00 - 17:00",
    location: "Центр профессионального развития педагогов, ул. Ленина, 45",
    theme: "Инновационные методики в современном образовании"
  };

  const schedule = [
    {
      id: "1",
      time: "09:00 - 10:30",
      title: "Цифровые технологии в классе",
      speaker: "Анна Петрова",
      room: "Аудитория 201",
      category: "Технологии"
    },
    {
      id: "2",
      time: "11:00 - 12:30",
      title: "Игровые методики обучения",
      speaker: "Михаил Сидоров",
      room: "Аудитория 305",
      category: "Методики"
    },
    {
      id: "3",
      time: "13:00 - 14:00",
      title: "Эмоциональный интеллект учащихся",
      speaker: "Елена Волкова",
      room: "Актовый зал",
      category: "Психология"
    },
    {
      id: "4",
      time: "14:30 - 16:00",
      title: "Проектная деятельность в школе",
      speaker: "Дмитрий Козлов",
      room: "Аудитория 201",
      category: "Методики"
    }
  ];

  const speakers = [
    {
      id: "1",
      name: "Анна Петрова",
      position: "Методист по цифровым технологиям",
      experience: "15 лет в образовании",
      avatar: "АП",
      bio: "Эксперт в области внедрения цифровых решений в образовательный процесс"
    },
    {
      id: "2",
      name: "Михаил Сидоров",
      position: "Педагог-новатор",
      experience: "12 лет в образовании",
      avatar: "МС",
      bio: "Разработчик авторских игровых методик преподавания"
    },
    {
      id: "3",
      name: "Елена Волкова",
      position: "Педагог-психолог",
      experience: "20 лет в образовании",
      avatar: "ЕВ",
      bio: "Специалист по развитию эмоционального интеллекта у детей и подростков"
    },
    {
      id: "4",
      name: "Дмитрий Козлов",
      position: "Руководитель проектной лаборатории",
      experience: "10 лет в образовании",
      avatar: "ДК",
      bio: "Организатор масштабных образовательных проектов на уровне округа"
    }
  ];

  const handleRating = (sessionId: string, rating: number) => {
    setRatings({ ...ratings, [sessionId]: rating });
    toast.success("Спасибо за вашу оценку! 🌟");
  };

  const handleReviewSubmit = (sessionId: string) => {
    if (reviews[sessionId]?.trim()) {
      toast.success("Ваш отзыв отправлен! 💬");
      setReviews({ ...reviews, [sessionId]: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold">📚 Единый методический день</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            {eventInfo.theme}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-lg">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={24} className="text-primary" />
              <span className="font-medium">{eventInfo.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={24} className="text-primary" />
              <span className="font-medium">{eventInfo.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="font-medium">{eventInfo.location}</span>
            </div>
          </div>
        </header>

        <Tabs defaultValue="program" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-auto p-1 bg-card shadow-lg">
            <TabsTrigger value="program" className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="CalendarDays" size={20} className="mr-2" />
              Программа
            </TabsTrigger>
            <TabsTrigger value="speakers" className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Users" size={20} className="mr-2" />
              Спикеры
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Отзывы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="program" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              {schedule.map((session) => (
                <Card key={session.id} className="hover-scale border-2 hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-sm font-medium">
                        {session.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">{session.time}</span>
                    </div>
                    <CardTitle className="text-2xl">{session.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      <div className="flex items-center gap-2 mt-2">
                        <Icon name="User" size={16} className="text-accent" />
                        <span>{session.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Icon name="DoorOpen" size={16} className="text-accent" />
                        <span>{session.room}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speakers" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              {speakers.map((speaker) => (
                <Card key={speaker.id} className="hover-scale border-2 hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-20 h-20 border-4 border-accent/30">
                        <AvatarFallback className="bg-accent text-accent-foreground text-xl font-bold">
                          {speaker.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-1">{speaker.name}</CardTitle>
                        <CardDescription className="text-base">
                          <p className="font-medium text-accent mb-1">{speaker.position}</p>
                          <p className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Award" size={16} />
                            {speaker.experience}
                          </p>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{speaker.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6 animate-fade-in">
            <div className="grid gap-6">
              {schedule.map((session) => (
                <Card key={session.id} className="border-2 bg-card/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                    <CardDescription>Спикер: {session.speaker}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-3">Оцените мастер-класс:</p>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Button
                            key={star}
                            variant={ratings[session.id] >= star ? "default" : "outline"}
                            size="icon"
                            onClick={() => handleRating(session.id, star)}
                            className="hover-scale transition-all"
                          >
                            <Icon 
                              name="Star" 
                              size={20} 
                              className={ratings[session.id] >= star ? "fill-current" : ""} 
                            />
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Ваш отзыв:</p>
                      <Textarea
                        placeholder="Поделитесь впечатлениями о мастер-классе..."
                        value={reviews[session.id] || ""}
                        onChange={(e) => setReviews({ ...reviews, [session.id]: e.target.value })}
                        className="min-h-[100px] resize-none"
                      />
                      <Button
                        onClick={() => handleReviewSubmit(session.id)}
                        className="mt-3"
                        disabled={!reviews[session.id]?.trim()}
                      >
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить отзыв
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center text-muted-foreground animate-fade-in">
          <p className="text-lg">🎓 Создано для развития профессионального мастерства педагогов округа</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
