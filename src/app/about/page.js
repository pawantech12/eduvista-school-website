import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Heart, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Our School
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-100">
              A tradition of excellence in education since 1985.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 1985, our school has grown from a small community
              school to a leading educational institution. We&apos;ve maintained
              our commitment to academic excellence and character development
              throughout our history.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/early-school.webp"
                alt="School in early days"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Beginning
                </h3>
                <p className="mt-2 text-gray-600">
                  Our school began with a vision to provide quality education
                  that nurtures both academic excellence and character
                  development. Starting with just 50 students and 5 teachers, we
                  focused on creating a supportive learning environment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Growth and Development
                </h3>
                <p className="mt-2 text-gray-600">
                  Over the decades, we&apos;ve expanded our campus, enhanced our
                  curriculum, and built a strong reputation for educational
                  excellence. Today, we serve over 1,200 students with a faculty
                  of 100 dedicated educators.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Looking to the Future
                </h3>
                <p className="mt-2 text-gray-600">
                  As we continue to grow, we remain committed to our founding
                  principles while embracing innovation in education. Our goal
                  is to prepare students for success in a rapidly changing
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are guided by a clear mission and core values that shape
              everything we do.
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center">
                <Target className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-center text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 text-center text-lg text-gray-600">
                To provide a nurturing and challenging educational environment
                that empowers students to become intellectually curious,
                socially responsible, and globally conscious individuals
                prepared for success in college and beyond.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      <Award className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      Excellence
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We strive for excellence in all aspects of education,
                      challenging students to reach their highest potential.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      <Heart className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      Compassion
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We foster empathy, kindness, and respect for others,
                      encouraging students to make positive contributions to
                      society.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      <CheckCircle className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      Integrity
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We uphold the highest standards of honesty, ethics, and
                      responsibility in all our actions and decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the dedicated professionals who guide our school&apos;s
              vision and operations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden p-0">
              <div className="h-64 bg-teal-100">
                <Image
                  src="/principal.jpg"
                  alt="Principal"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Jennifer Williams
                </h3>
                <p className="text-sm text-teal-600">Principal</p>
                <p className="mt-2 text-gray-600">
                  With over 20 years of experience in education, Dr. Williams
                  leads our school with vision and dedication.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-64 bg-teal-100">
                <Image
                  src="/vice-principal.webp"
                  alt="Vice Principal"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Marcus Johnson
                </h3>
                <p className="text-sm text-teal-600">Vice Principal</p>
                <p className="mt-2 text-gray-600">
                  Dr. Johnson oversees academic programs and student development
                  with expertise and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-64 bg-teal-100">
                <Image
                  src="/dean.png"
                  alt="Dean of Students"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Ms. Sophia Chen
                </h3>
                <p className="text-sm text-teal-600">Dean of Students</p>
                <p className="mt-2 text-gray-600">
                  Ms. Chen creates a positive school culture and supports
                  student success and well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Campus Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our modern campus provides an ideal environment for learning and
              growth.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/classroom.jpg"
                alt="Modern Classrooms"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Modern Classrooms
                </h3>
                <p className="text-white/90">
                  Equipped with the latest technology to enhance learning.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/labs.webp"
                alt="Science Labs"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Science Labs</h3>
                <p className="text-white/90">
                  State-of-the-art facilities for hands-on scientific
                  exploration.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/library.jpg"
                alt="Library"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Library & Media Center
                </h3>
                <p className="text-white/90">
                  Comprehensive resources for research and independent study.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/athletic.jpg"
                alt="Athletic Facilities"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Athletic Facilities
                </h3>
                <p className="text-white/90">
                  Modern sports facilities supporting physical education and
                  competitive athletics.
                </p>
              </div>
            </div>
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
    </>
  );
}
