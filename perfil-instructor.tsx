"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, MapPin, Clock, Award, Users, Calendar, Palette, Mail, Star } from "lucide-react"

export default function PerfilInstructor() {
  const [esBlancoyNegro, setEsBlancoyNegro] = useState(false)

  const alternarEsquemaColor = () => {
    setEsBlancoyNegro(!esBlancoyNegro)
  }

  const datosHorario = [
    { dia: "Lunes", hora: "6:00 AM - 7:30 AM", tipo: "Carrera Grupal Principiantes" },
    { dia: "Lunes", hora: "6:00 PM - 7:00 PM", tipo: "Entrenamiento de Velocidad" },
    { dia: "Miércoles", hora: "6:00 AM - 7:30 AM", tipo: "Carrera Intermedia" },
    { dia: "Miércoles", hora: "6:30 PM - 7:30 PM", tipo: "Entrenamiento en Colinas" },
    { dia: "Viernes", hora: "6:00 AM - 7:30 AM", tipo: "Preparación Larga Distancia" },
    { dia: "Sábado", hora: "7:00 AM - 9:00 AM", tipo: "Carrera Larga de Fin de Semana" },
    { dia: "Domingo", hora: "8:00 AM - 9:00 AM", tipo: "Carrera de Recuperación" },
  ]

  const logros = [
    "Entrenador Certificado de Running (RRCA)",
    "Mejor Tiempo Personal en Maratón: 2:42:15",
    "Más de 18 años de Experiencia Entrenando",
    "Licenciatura en Ciencias del Deporte",
    "Más de 600 Atletas Entrenados",
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        esBlancoyNegro
          ? "bg-white text-black [&_*]:!text-black [&_.bg-primary]:!bg-black [&_.text-primary]:!text-black [&_.border]:!border-gray-300"
          : "bg-gradient-to-br from-blue-50 to-green-50"
      }`}
    >
      {/* Botón de Alternancia de Color */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={alternarEsquemaColor}
          variant="outline"
          size="sm"
          className={`${esBlancoyNegro ? "border-black text-black hover:bg-gray-100" : ""}`}
        >
          <Palette className="h-4 w-4 mr-2" />
          {esBlancoyNegro ? "Color" : "B&N"}
        </Button>
      </div>

      {/* Sección Principal */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Imagen del Instructor */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Instructor Profesional de Running"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Logo Superpuesto */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    alt="Logo del Entrenador"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Información del Instructor */}
            <div className="space-y-6">
              <div>
                <Badge className={`mb-4 ${esBlancoyNegro ? "bg-black text-white" : "bg-primary"}`}>
                  Entrenador Certificado de Running
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Carlos Rodríguez</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Transforma tu Experiencia de Running con Orientación Experta
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">600+ Atletas Entrenados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm">18+ Años de Experiencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">4.9/5 Calificación</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Parque del Retiro, Madrid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Acerca de & Ofertas */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Acerca de Carlos & Ofertas de Entrenamiento</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className={esBlancoyNegro ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Experiencia Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Con más de 18 años de experiencia en running competitivo y entrenamiento, Carlos ha ayudado a
                    cientos de atletas a alcanzar sus mejores marcas personales. Posee certificaciones de RRCA y tiene
                    una licenciatura en Ciencias del Deporte por la Universidad Complutense de Madrid.
                  </p>
                </CardContent>
              </Card>

              <Card className={esBlancoyNegro ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Filosofía de Entrenamiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Carlos cree en el entrenamiento personalizado que se adapta a los objetivos únicos, nivel de
                    condición física y estilo de vida de cada corredor. Su enfoque combina métodos de entrenamiento
                    científicos con coaching motivacional para asegurar un progreso sostenible.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Ofertas de Entrenamiento */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className={`text-center ${esBlancoyNegro ? "border-black" : ""}`}>
                <CardHeader>
                  <CardTitle>Programas para Principiantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Programas de Sofá a 5K</li>
                    <li>• Análisis de Técnica de Carrera</li>
                    <li>• Prevención de Lesiones</li>
                    <li>• Orientación Nutricional</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`text-center ${esBlancoyNegro ? "border-black" : ""}`}>
                <CardHeader>
                  <CardTitle>Entrenamiento Avanzado</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Preparación para Maratón</li>
                    <li>• Entrenamiento de Velocidad e Intervalos</li>
                    <li>• Sesiones de Entrenamiento en Colinas</li>
                    <li>• Planificación de Estrategia de Carrera</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`text-center ${esBlancoyNegro ? "border-black" : ""}`}>
                <CardHeader>
                  <CardTitle>Servicios Especializados</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Entrenamiento Personalizado</li>
                    <li>• Sesiones de Entrenamiento Grupal</li>
                    <li>• Coaching Virtual</li>
                    <li>• Recuperación y Rehabilitación</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Horario de Entrenamiento */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Calendar className="h-8 w-8 mr-3 text-primary" />
              Horario Semanal de Entrenamiento
            </h2>

            <div className="grid gap-4">
              {datosHorario.map((sesion, index) => (
                <Card key={index} className={`${esBlancoyNegro ? "border-black" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <Badge variant="outline" className={`${esBlancoyNegro ? "border-black text-black" : ""}`}>
                          {sesion.dia}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {sesion.hora}
                        </div>
                      </div>
                      <div className="font-medium">{sesion.tipo}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Información Detallada */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Logros y Credenciales</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className={esBlancoyNegro ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle>Logros Profesionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {logros.map((logro, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{logro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className={esBlancoyNegro ? "border-black" : ""}>
                <CardHeader>
                  <CardTitle>Ubicaciones de Entrenamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Parque del Retiro</h4>
                        <p className="text-sm text-muted-foreground">
                          Ubicación principal de entrenamiento con varias opciones de circuitos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Casa de Campo</h4>
                        <p className="text-sm text-muted-foreground">
                          Senderos naturales para entrenamientos en colinas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Madrid Río</h4>
                        <p className="text-sm text-muted-foreground">
                          Carreras largas de fin de semana con vistas al río
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">¿Listo para Comenzar tu Aventura de Running?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contacta a Carlos hoy para discutir tus objetivos de running y encontrar el programa de entrenamiento
              perfecto para ti.
            </p>

            <Card className={`${esBlancoyNegro ? "border-black" : "border-primary/20"} bg-white/80 backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Llama o Envía WhatsApp</p>
                      <p className="text-2xl font-bold">+34 612 345 678</p>
                    </div>
                  </div>

                  <Separator className={esBlancoyNegro ? "bg-black" : ""} />

                  <div className="flex items-center justify-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Correo Electrónico</p>
                      <p className="text-lg font-medium">carlos@runconcarlos.es</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className={`w-full md:w-auto ${esBlancoyNegro ? "bg-black text-white hover:bg-gray-800" : ""}`}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Llama Ahora para Reservar tu Sesión
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="py-8 bg-white/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Carlos Rodríguez Entrenador de Running. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
