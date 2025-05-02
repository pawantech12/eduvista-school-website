import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-100">
              We&apos;d love to hear from you. Reach out with any questions
              about our programs or admissions process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We&apos;re here to answer your questions and provide the
                information you need about our school.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Location
                    </h3>
                    <address className="mt-2 not-italic text-gray-600">
                      123 Education Lane
                      <br />
                      Anytown, ST 12345
                      <br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-2 text-gray-600">
                      Main Office: (555) 123-4567
                      <br />
                      Admissions: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-2 text-gray-600">
                      General Inquiries: info@schoolname.edu
                      <br />
                      Admissions: admissions@schoolname.edu
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      Office Hours
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Monday - Friday: 8:00 AM - 4:30 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM (Admissions Office)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Send Us a Message
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          name="first-name"
                          placeholder="Enter your first name..."
                          type="text"
                          required
                          className="mt-1 h-11"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          name="last-name"
                          placeholder="Enter your last name..."
                          type="text"
                          required
                          className="mt-1 h-11"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        required
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        type="tel"
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter a subject..."
                        required
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={8}
                        placeholder="Enter your message here..."
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 py-6 text-base font-bold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Visit Our Campus
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re conveniently located in the heart of the city. Come see
              our beautiful campus in person.
            </p>
          </div>

          <div className="mt-12 aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
            {/* This would be replaced with an actual map component in a real implementation */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609867087!2d72.74110063331823!3d19.08219783926985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63bcd70f7e5%3A0x3d078de2d6c5d1cd!2sMumbai!5e0!3m2!1sen!2sin!4v1714558338797!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Mumbai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-base cursor-pointer">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find quick answers to common questions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  How can I schedule a campus tour?
                </h3>
                <p className="mt-2 text-gray-600">
                  You can schedule a tour by contacting our Admissions Office at
                  (555) 123-4568 or by filling out the form on our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  What are your school hours?
                </h3>
                <p className="mt-2 text-gray-600">
                  Our school day runs from 8:30 AM to 3:30 PM, Monday through
                  Friday. Extended care is available from 7:00 AM to 6:00 PM.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  How do I apply for financial aid?
                </h3>
                <p className="mt-2 text-gray-600">
                  Financial aid applications are available through our
                  Admissions Office. The application process is separate from
                  the admissions process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Do you offer summer programs?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer a variety of summer programs including academic
                  enrichment, sports camps, and arts programs. Details are
                  available on our website.
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
