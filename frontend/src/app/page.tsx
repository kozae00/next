import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div>메인페이지입니다.</div>
      <Button variant="outline">Button1</Button>
      <Button variant="destructive">Button2</Button>
      <Button className="bg-red-300 w-[100px]">Button3</Button>
    </>
  );
}
