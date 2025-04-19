import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-10">
      <div>
        <Button variant={"elevated"}>Im a button</Button>
      </div>

      <div>
        <Input placeholder="Im am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="textares" />
      </div>
    </div>
  );
}
