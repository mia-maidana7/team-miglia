"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, MapPin, Clock, Award, Users, Calendar, Palette, Mail, Star } from "lucide-react"

export default function InstructorProfile() {
  const [isBlackWhite, setIsBlackWhite] = useState(false)

  const toggleColorScheme = () => {
    setIsBlackWhite(!isBlackWhite)
  }

  const scheduleData = [
    { day: "Monday", time: "6:00 AM - 7:30 AM", type: "Beginner Group Run" },
    { day: "Monday", time: "6:00 PM - 7:00 PM", type: "Speed Training" },
    { day: "Wednesday", time: "6:00 AM - 7:30 AM", type: "Intermediate Run" },
    { day: "Wednesday", time: "6:30 PM - 7:30 PM", type: "Hill Training" },
    { day: "Friday", time: "6:00 AM - 7:30 AM", type: "Long Distance Prep" },
    { day: "Saturday", time: "7:00 AM - 9:00 AM", type: "Weekend Long Run" },
    { day: "Sunday", time: "8:00 AM - 9:00 AM", type: "Recovery Run" },
  ]

  const achievements = [
    "Certified Running Coach (RRCA)",
    "Marathon Personal Best: 2:45:32",
    "15+ Years Coaching Experience",
    "Sports Science Degree",
    "500+ Athletes Trained",
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isBlackWhite
          ? "bg-white text-black [&_*]:!text-black [&_.bg-primary]:!bg-black [&_.text-primary]:!text-black [&_.border]:!border-gray-300"
          : "bg-gradient-to-br from-blue-50 to-green-50"
      }`}
    >
      {/* Color Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleColorScheme}
          variant="outline"
          size="sm"
          className={`${isBlackWhite ? "border-black text-black hover:bg-gray-100" : ""}`}
        >
          <Palette className="h-4 w-4 mr-2" />
          {isBlackWhite ? "Color" : "B&W"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Instructor Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional Running Instructor"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Logo Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Coach Logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="space-y-6">
              <div>
                <Badge className={`mb-4 ${isBlackWhite ? "bg-black text-white" : "bg-primary"}`}>
                  Certified Running Coach
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Sarah Mitchell</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Transform Your Running Journey with Expert Guidance
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">500+ Athletes Trained</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Central Park, NYC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Offerings Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Sarah & Training Offerings</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={isBlackWhite ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Professional Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years of experience in competitive running and coaching, Sarah has helped hundreds of
                    athletes achieve their personal bests. She holds certifications from RRCA and has a Sports Science
                    degree from Columbia University.
                  </p>
                </CardContent>
              </Card>

              <Card className={isBlackWhite ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Training Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Sarah believes in personalized training that adapts to each runner's unique goals, fitness level,
                    and lifestyle. Her approach combines scientific training methods with motivational coaching to
                    ensure sustainable progress.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Training Offerings */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className={`text-center ${isBlackWhite ? "border-black" : ""}`}>
                <CardHeader>
                  <CardTitle>Beginner Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Couch to 5K Programs</li>
                    <li>• Running Form Analysis</li>
                    <li>• Injury Prevention</li>
                    <li>• Nutrition Guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`text-center ${isBlackWhite ? "border-black" : ""}`}>
                <CardHeader>
                  <CardTitle>Advanced Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Marathon Preparation</li>
                    <li>• Speed & Interval Training</li>
                    <li>• Hill Training Sessions</li>
                    <li>• Race Strategy Planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`text-center ${isBlackWhite ? "border-black" : ""}`}>
                <CardHeader>
                  <CardTitle>Specialized Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• One-on-One Coaching</li>
                    <li>• Group Training Sessions</li>
                    <li>• Virtual Coaching</li>
                    <li>• Recovery & Rehabilitation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Calendar className="h-8 w-8 mr-3 text-primary" />
              Weekly Training Schedule
            </h2>

            <div className="grid gap-4">
              {scheduleData.map((session, index) => (
                <Card key={index} className={`${isBlackWhite ? "border-black" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <Badge variant="outline" className={`${isBlackWhite ? "border-black text-black" : ""}`}>
                          {session.day}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {session.time}
                        </div>
                      </div>
                      <div className="font-medium">{session.type}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Achievements & Credentials</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className={isBlackWhite ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle>Professional Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className={isBlackWhite ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle>Training Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Central Park</h4>
                        <p className="text-sm text-muted-foreground">
                          Main training location with various loop options
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Riverside Park</h4>
                        <p className="text-sm text-muted-foreground">Scenic waterfront running paths</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Brooklyn Bridge Park</h4>
                        <p className="text-sm text-muted-foreground">Weekend long runs with city views</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Running Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Sarah today to discuss your running goals and find the perfect training program for you.
            </p>

            <Card className={`${isBlackWhite ? "border-black" : "border-primary/20"} bg-white/80 backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Call or Text</p>
                      <p className="text-2xl font-bold">(555) 123-4567</p>
                    </div>
                  </div>

                  <Separator className={isBlackWhite ? "bg-black" : ""} />

                  <div className="flex items-center justify-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-lg font-medium">sarah@runwithsarah.com</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className={`w-full md:w-auto ${isBlackWhite ? "bg-black text-white hover:bg-gray-800" : ""}`}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now to Book Your Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Sarah Mitchell Running Coach. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
