import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Calendar, FileText, Users, Clock } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Join Our Community
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-100">
              Begin your journey with us and discover the opportunities that
              await.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Our Admissions Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;ve designed a straightforward process to help you explore
              whether our school is the right fit for your family.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Inquire
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Submit an inquiry form to receive information about our
                    programs and admissions process.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Visit
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Schedule a campus tour to experience our learning
                    environment and meet our community.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Apply
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Complete the online application and submit required
                    documents for consideration.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Enroll
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Upon acceptance, complete the enrollment process to secure
                    your child&apos;s place.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Application Requirements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The following materials are required to complete your application.
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
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Completed Application Form
                          </h4>
                          <p className="text-gray-600">
                            Submit our online application with all required
                            information.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Birth Certificate
                          </h4>
                          <p className="text-gray-600">
                            A copy of the student&apos;s birth certificate.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Previous School Records
                          </h4>
                          <p className="text-gray-600">
                            Report cards from the previous two years (if
                            applicable).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Teacher Recommendation
                          </h4>
                          <p className="text-gray-600">
                            One recommendation from a current teacher.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Student Visit
                          </h4>
                          <p className="text-gray-600">
                            A classroom visit day for the applicant.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="middle" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Completed Application Form
                          </h4>
                          <p className="text-gray-600">
                            Submit our online application with all required
                            information.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Academic Records
                          </h4>
                          <p className="text-gray-600">
                            Report cards from the previous two years and any
                            standardized test results.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Teacher Recommendations
                          </h4>
                          <p className="text-gray-600">
                            Recommendations from current Math and English
                            teachers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Student Essay
                          </h4>
                          <p className="text-gray-600">
                            A personal essay written by the applicant.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Student Interview & Visit
                          </h4>
                          <p className="text-gray-600">
                            An interview with admissions staff and a shadow day.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="high" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Completed Application Form
                          </h4>
                          <p className="text-gray-600">
                            Submit our online application with all required
                            information.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Academic Records
                          </h4>
                          <p className="text-gray-600">
                            Transcripts from previous schools and standardized
                            test scores.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Teacher Recommendations
                          </h4>
                          <p className="text-gray-600">
                            Recommendations from current Math, English, and one
                            other subject teacher.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Student Essays
                          </h4>
                          <p className="text-gray-600">
                            Personal and academic essays written by the
                            applicant.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Student Interview
                          </h4>
                          <p className="text-gray-600">
                            A formal interview with admissions staff and
                            faculty.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Shadow Day
                          </h4>
                          <p className="text-gray-600">
                            A full day visit to experience classes and school
                            culture.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Important Dates
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Mark your calendar with these key admissions deadlines for the
              2025-2026 school year.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Early Decision",
                details: [
                  { label: "Application Deadline", value: "December 15, 2024" },
                  { label: "Decision Notification", value: "January 31, 2025" },
                  { label: "Enrollment Deadline", value: "February 28, 2025" },
                ],
              },
              {
                title: "Regular Decision",
                details: [
                  { label: "Application Deadline", value: "February 15, 2025" },
                  { label: "Decision Notification", value: "March 31, 2025" },
                  { label: "Enrollment Deadline", value: "April 30, 2025" },
                ],
              },
              {
                title: "Rolling Admission",
                details: [
                  { label: "Application Review", value: "After March 1, 2025" },
                  {
                    label: "Decision Notification",
                    value: "2-4 weeks after completion",
                  },
                  {
                    label: "Enrollment Deadline",
                    value: "2 weeks after acceptance",
                  },
                ],
              },
            ].map((card, index) => (
              <Card
                key={index}
                className="transition-shadow duration-300 hover:shadow-xl border border-gray-200 cursor-pointer"
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <div>
                    <CardTitle className="text-lg text-gray-900 font-bold">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Admission Timeline
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 pb-6 px-6 space-y-4">
                  {card.details.map((item, i) => (
                    <div key={i} className="flex justify-between text-base">
                      <span className="font-medium text-gray-700">
                        {item.label}
                      </span>
                      <span className="text-teal-600 font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              * Rolling admissions are based on space availability after regular
              decision deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Tuition & Financial Aid
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are committed to making our education accessible to families
              from diverse economic backgrounds.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-teal-800">
                  2025-2026 Tuition
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Elementary School (K-5)</span>
                    <span className="font-bold">$18,500</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Middle School (6-8)</span>
                    <span className="font-bold">$20,750</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">High School (9-12)</span>
                    <span className="font-bold">$22,900</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  * Tuition includes books, technology fees, and most field
                  trips. Additional fees may apply for certain programs and
                  activities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-teal-800">
                  Financial Aid
                </h3>
                <p className="mt-2 text-gray-600">
                  We offer need-based financial aid to qualified families. Our
                  goal is to make our school accessible to students from diverse
                  economic backgrounds.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p>
                      Financial aid applications are reviewed separately from
                      admission applications.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p>
                      Aid is awarded based on demonstrated financial need and
                      availability of funds.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p>
                      Applications for financial aid should be submitted by
                      January 15, 2025.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                    Learn More About Financial Aid
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our admissions process.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  What is your acceptance rate?
                </h3>
                <p className="mt-2 text-gray-600">
                  Our acceptance rate varies by grade level and year, typically
                  ranging from 60-75%. We look for students who will thrive in
                  our academic environment and contribute positively to our
                  community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Do you offer transportation services?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer bus transportation for students living within a
                  15-mile radius of the school. Additional fees apply for this
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Is there an application fee?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, there is a non-refundable application fee of $75. This
                  fee may be waived in cases of financial hardship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  When should we apply for admission?
                </h3>
                <p className="mt-2 text-gray-600">
                  We recommend applying as early as possible, as some grade
                  levels fill quickly. Our application process opens in October
                  for the following academic year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Do you have before and after school care?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer extended day programs from 7:00 AM to 6:00 PM
                  for an additional fee. This program includes supervised
                  activities and homework support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  What is your student-to-teacher ratio?
                </h3>
                <p className="mt-2 text-gray-600">
                  Our average class size is 18 students, with a
                  student-to-teacher ratio of 10:1, allowing for personalized
                  attention and support.
                </p>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100">
              Take the first step toward joining our school community.
              We&apos;re excited to get to know your family.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-white text-teal-800 hover:bg-gray-100 cursor-pointer text-base font-bold"
              >
                Apply Now
              </Button>
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
