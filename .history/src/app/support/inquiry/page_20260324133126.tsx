"use client";

import { Clock, Download, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  company: z.string().min(2, "회사명을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(10, "올바른 전화번호를 입력해주세요"),
  inquiryType: z.string().min(1, "문의 유형을 선택해주세요"),
  message: z.string().min(10, "문의 내용을 입력해주세요"),
});

export default function InquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("onSubmit", values);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success("문의가 성공적으로 접수되었습니다.");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("문의 접수 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function onInvalid() {
    toast.error("필수 항목을 모두 입력해주세요.");
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              제품 문의
            </h1>
            <p className="text-xl text-gray-200">
              에이로보틱스의 AMR 솔루션에 대해 문의하세요
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Inquiry Form Area */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200 h-[640px] flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  문의하기
                </h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                    className="space-y-4 flex-1 flex flex-col"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이름 *</FormLabel>
                            <FormControl>
                              <Input placeholder="홍길동" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>회사명 *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="회사명을 입력하세요"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이메일 *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="example@company.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>전화번호 *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="010-1234-5678"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>문의 유형 *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="문의 유형을 선택하세요" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="product">제품 문의</SelectItem>
                              <SelectItem value="price">가격 문의</SelectItem>
                              <SelectItem value="demo">데모 요청</SelectItem>
                              <SelectItem value="partnership">
                                파트너십
                              </SelectItem>
                              <SelectItem value="support">기술 지원</SelectItem>
                              <SelectItem value="other">기타</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    /> */}

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>문의 내용 *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="문의하실 내용을 자세히 입력해주세요"
                              className="h-full min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "전송 중..." : "문의하기"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

              {/* Download Panel */}
              <div className="mt-8">
                <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <Download className="h-6 w-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        컨설팅 및 견적용 요청자료
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          정확한 견적 및 컨설팅을 위해 필요한 정보를 작성하여
                          보내주세요.
                          <br />
                          다운로드 후 작성하시어 이메일로 보내주시면 됩니다.
                        </p>
                        <Button asChild>
                          <a
                            href="/download/request_data_a-robotics.xlsx"
                            download="request_data_a-robotics.xlsx"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            다운로드
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200 h-[640px]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  연락처 정보
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">주소</p>
                      <p className="text-gray-600 text-sm">
                        (21072) 인천광역시 계양구
                        <br />
                        서운산단로2길 5
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">전화번호</p>
                      <p className="text-gray-600 text-sm">
                        대표전화: 032-584-9592
                        <br />
                        팩스: 032-555-9592
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">이메일</p>
                      <p className="text-gray-600 text-sm">
                        ahn@a-robotics.co.kr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">운영시간</p>
                      <p className="text-gray-600 text-sm">
                        평일 09:00 - 18:00
                        <br />
                        토요일/일요일/공휴일 휴무
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">회사정보</p>
                      <p className="text-gray-600 text-sm">
                        상호: (주)에이로보틱스
                        <br />
                        대표: 권재인
                        <br />
                        사업자번호: 135-88-02281
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm text-center">
                    문의 접수 후 24시간 이내 담당자가 연락드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
