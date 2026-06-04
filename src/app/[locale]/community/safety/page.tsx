import { PageHeader } from "@/components/v3/PageHeader";

const rules = [
  "初次见面选择公开场所。",
  "告知亲友行程。",
  "不进入陌生人的私人住所。",
  "不透露酒店房间号。",
  "不提供护照照片、银行卡或密码。",
  "不转账给陌生人。",
  "不接受可疑私人付费安排。",
  "遇到骚扰立即离开。",
  "使用举报和拉黑。",
  "紧急情况拨打官方号码。",
  "平台不能保证每一名用户的身份。",
  "任何线下见面均需保持谨慎。",
];

export default function CommunitySafetyPage() {
  return (
    <>
      <PageHeader title="同行巴黎安全规则" description="MVP 社区功能优先公开活动、人工审核、举报和隐私保护，不做实时定位或陌生人即时聊天。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-5xl gap-3 px-4 sm:px-6 lg:px-8">
          {rules.map((rule) => (
            <div key={rule} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 shadow-sm">
              {rule}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
