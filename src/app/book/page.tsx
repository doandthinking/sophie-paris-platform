import { BookingForm } from "@/components/forms/BookingForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/mock-data";

type BookPageProps = {
  searchParams?: Promise<{
    service?: string;
  }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = searchParams ? await searchParams : undefined;

  return (
    <section className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="游客预约"
          title="告诉我们你在巴黎需要什么帮助"
          description="第一版表单只做本地模拟提交，后续可以接入数据库、微信通知和人工派单流程。"
        />
        <div className="mt-8">
          <BookingForm services={services} initialServiceSlug={params?.service ?? ""} />
        </div>
      </div>
    </section>
  );
}
