import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  GraduationCap,
  Palette,
  Calculator,
  Globe,
  Code,
  Microscope,
  Music,
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Academic Excellence
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-100">
              Rigorous curriculum designed to challenge and inspire students at
              every level.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl text-center">
              Our Academic Philosophy
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              At our school, we believe that education should be both
              challenging and engaging. Our academic program is designed to:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-sm font-medium">1</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-900">
                    Foster critical thinking
                  </span>{" "}
                  through inquiry-based learning and problem-solving activities.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-sm font-medium">2</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-900">
                    Develop strong communication skills
                  </span>{" "}
                  through writing, speaking, and collaborative projects.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-900">
                    Encourage creativity and innovation
                  </span>{" "}
                  across all subject areas.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-sm font-medium">4</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-900">
                    Prepare students for college and beyond
                  </span>{" "}
                  with rigorous coursework and personalized guidance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Academic Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our comprehensive educational programs designed for each
              stage of development.
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="elementary" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-full p-1">
                <TabsTrigger
                  value="elementary"
                  className={
                    "data-[state=active]:bg-teal-600 data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer"
                  }
                >
                  Elementary School
                </TabsTrigger>
                <TabsTrigger
                  value="middle"
                  className={
                    "data-[state=active]:bg-teal-600 data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer"
                  }
                >
                  Middle School
                </TabsTrigger>
                <TabsTrigger
                  value="high"
                  className={
                    "data-[state=active]:bg-teal-600 data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer"
                  }
                >
                  High School
                </TabsTrigger>
              </TabsList>
              <TabsContent value="elementary" className="mt-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative h-80 overflow-hidden rounded-xl">
                    <Image
                      src="/elementary-program.jpg"
                      alt="Elementary Classroom"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Elementary School (Grades K-5)
                    </h3>
                    <p className="text-gray-600">
                      Our elementary program focuses on building strong
                      foundations in core subjects while nurturing curiosity and
                      creativity. Students develop essential skills in reading,
                      writing, mathematics, science, and social studies through
                      engaging, hands-on activities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Balanced literacy approach</span>
                      </li>
                      <li className="flex items-center">
                        <Calculator className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Singapore Math curriculum</span>
                      </li>
                      <li className="flex items-center">
                        <Palette className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Integrated arts program</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Foreign language introduction</span>
                      </li>
                    </ul>
                    <Button className="w-fit bg-teal-600 hover:bg-teal-700 cursor-pointer">
                      Learn More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="middle" className="mt-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative h-80 overflow-hidden rounded-xl">
                    <Image
                      src="/middle-program.jpg"
                      alt="Middle School Students"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Middle School (Grades 6-8)
                    </h3>
                    <p className="text-gray-600">
                      Our middle school program builds on elementary foundations
                      while helping students develop greater independence and
                      critical thinking skills. Students explore more advanced
                      content across all subject areas and begin to discover
                      their unique interests and talents.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Advanced literature studies</span>
                      </li>
                      <li className="flex items-center">
                        <Microscope className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Hands-on science investigations</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Technology and coding courses</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Foreign language options</span>
                      </li>
                    </ul>
                    <Button className="w-fit bg-teal-600 hover:bg-teal-700 cursor-pointer">
                      Learn More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="high" className="mt-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative h-80 overflow-hidden rounded-xl">
                    <Image
                      src="/high-program.jpg"
                      alt="High School Students"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      High School (Grades 9-12)
                    </h3>
                    <p className="text-gray-600">
                      Our high school program prepares students for college and
                      beyond through rigorous academics, leadership
                      opportunities, and personalized guidance. Students can
                      choose from a wide range of courses, including Advanced
                      Placement options, to create a program that aligns with
                      their goals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-teal-600" />
                        <span>College preparatory curriculum</span>
                      </li>
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Advanced Placement courses</span>
                      </li>
                      <li className="flex items-center">
                        <Microscope className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Research opportunities</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-teal-600" />
                        <span>Global studies program</span>
                      </li>
                    </ul>
                    <Button className="w-fit bg-teal-600 hover:bg-teal-700 cursor-pointer">
                      Learn More
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Curriculum Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our comprehensive curriculum provides students with a well-rounded
              education.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <BookOpen className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Language Arts
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Developing strong reading, writing, speaking, and listening
                    skills through literature, composition, and communication.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Calculator className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Mathematics
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Building mathematical understanding through problem-solving,
                    reasoning, and real-world applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Microscope className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Science
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Exploring the natural world through inquiry-based learning,
                    experiments, and scientific investigation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Globe className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Social Studies
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Understanding history, geography, economics, and civics to
                    become informed global citizens.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Globe className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    World Languages
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Developing proficiency in foreign languages and
                    understanding of diverse cultures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Palette className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Visual & Performing Arts
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Expressing creativity through art, music, drama, and dance
                    programs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Code className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Technology
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Building digital literacy and computational thinking skills
                    for the modern world.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Music className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Physical Education
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Promoting physical fitness, health, teamwork, and lifelong
                    wellness habits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Academic Support & Enrichment
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide resources to help every student succeed and reach their
              full potential.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-teal-800">
                  Learning Support Services
                </h3>
                <p className="mt-2 text-gray-600">
                  Our dedicated learning specialists provide individualized
                  support for students with diverse learning needs. Services
                  include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Personalized learning plans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>One-on-one tutoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Study skills development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Accommodations for diverse learning styles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-teal-800">
                  Gifted & Talented Program
                </h3>
                <p className="mt-2 text-gray-600">
                  Our enrichment programs challenge high-achieving students to
                  explore advanced concepts and develop their talents.
                  Opportunities include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Advanced coursework</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Independent research projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Academic competitions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Specialized enrichment activities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Learn More?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100">
              Schedule a meeting with our academic team to discuss how our
              programs can support your child&apos;s educational journey.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-white text-teal-800 hover:bg-gray-100 cursor-pointer text-base font-bold"
              >
                Request Information
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-teal-700 cursor-pointer text-base font-bold"
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
