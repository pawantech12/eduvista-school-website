import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/90 z-10" />

        <div className=" relative z-20 mx-auto px-4 py-32 text-center sm:px-6 lg:px-8 lg:py-40">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Inspiring Excellence</span>
            <span className="block text-teal-200">Shaping Future Leaders</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-white/90">
            Providing quality education and nurturing young minds to become
            responsible global citizens.
          </p>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div className="flex items-center gap-5 justify-center">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Why Choose Our School?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              We provide a nurturing environment where students can excel
              academically and personally.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-teal-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Excellence in Academics
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Rigorous and inspiring curriculum tailored for growth and
                  achievement.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-teal-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Dedicated Faculty
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Passionate educators focused on each student&apos;s success
                  and development.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-teal-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  College Preparation
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Structured programs designed to prepare students for top
                  universities.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-teal-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Calendar className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Extracurricular Activities
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Wide variety of clubs and activities to support holistic
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Academic Programs
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Comprehensive educational programs designed to nurture
              intellectual growth and personal development.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-teal-700">
                <Image
                  src="/elementary-program.jpg"
                  alt="Elementary Program"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-teal-800">
                  Elementary School
                </h3>
                <p className="mt-2 text-gray-600">
                  Building a strong foundation through engaging and interactive
                  learning experiences.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Core curriculum subjects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Arts and music programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Physical education</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className=" mt-4 cursor-pointer text-teal-700 border-teal-600 hover:bg-teal-50"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-teal-700">
                <Image
                  src="/middle-program.jpg"
                  alt="Middle School Program"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-teal-800">
                  Middle School
                </h3>
                <p className="mt-2 text-gray-600">
                  Developing critical thinking skills and fostering independence
                  in learning.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Advanced core subjects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Introduction to foreign languages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Technology and coding</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className=" mt-4 cursor-pointer text-teal-700 border-teal-600 hover:bg-teal-50"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-teal-700">
                <Image
                  src="/high-program.jpg"
                  alt="High School Program"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-teal-800">High School</h3>
                <p className="mt-2 text-gray-600">
                  Preparing students for college and beyond through rigorous
                  academic programs.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Advanced Placement courses</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>College counseling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                    <span>Leadership opportunities</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className=" mt-4 cursor-pointer text-teal-700 border-teal-600 hover:bg-teal-50"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              What Our Community Says
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Hear from our students, parents, and alumni about their
              experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-teal-100">
                      <Image
                        src="/user.jpg"
                        alt="Parent"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Sarah Johnson
                      </h3>
                      <p className="text-sm text-gray-600">Parent</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;The teachers at this school truly care about each
                    student&apos;s success. My child has thrived academically
                    and socially since enrolling here.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-teal-100">
                      <Image
                        src="/user2.jpg"
                        alt="Student"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Michael Chen
                      </h3>
                      <p className="text-sm text-gray-600">Student, Grade 11</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;I&apos;ve had amazing opportunities to explore my
                    interests and develop my skills. The supportive environment
                    has helped me grow as a student and as a person.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-teal-100">
                      <Image
                        src="/user3.jpg"
                        alt="Alumni"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Emily Rodriguez
                      </h3>
                      <p className="text-sm text-gray-600">
                        Alumni, Class of 2020
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;The education I received prepared me well for college.
                    The critical thinking skills and work ethic I developed have
                    been invaluable in my university studies.&quot;
                  </p>
                </div>
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
              Ready to Join Our Community?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100">
              Schedule a campus tour or apply for admission today. We look
              forward to welcoming you to our school family.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-teal-800 hover:bg-gray-100 cursor-pointer text-base font-bold"
              >
                Apply Now
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

      {/* Upcoming Events */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Join us for these exciting school events and activities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="px-6">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                      May 15, 2025
                    </div>
                    <span className="text-sm text-gray-500">
                      4:00 PM - 6:00 PM
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Spring Arts Festival
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Celebrate creativity with performances and exhibitions by
                    our talented students.
                  </p>
                  <Button
                    variant="outline"
                    className=" mt-4 cursor-pointer text-teal-700 border-teal-600 hover:bg-teal-50"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="px-6">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                      May 22, 2025
                    </div>
                    <span className="text-sm text-gray-500">
                      6:30 PM - 8:30 PM
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Science Fair
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Discover innovative projects and experiments by our budding
                    scientists.
                  </p>
                  <Button
                    variant="outline"
                    className=" mt-4 cursor-pointer text-teal-700 border-teal-600 hover:bg-teal-50"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="px-6">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                      June 5, 2025
                    </div>
                    <span className="text-sm text-gray-500">
                      10:00 AM - 12:00 PM
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Open House
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Tour our campus, meet faculty, and learn about our programs
                    for prospective families.
                  </p>
                  <Button
                    variant="outline"
                    className=" mt-4 cursor-pointer text-teal-700 border-teal-600 hover:bg-teal-50"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 cursor-pointer"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
