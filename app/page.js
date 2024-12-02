import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-blue-900 min-h-screen">
      <h1>new project</h1>
      <button className="w-10 h-10 bg-green-400 rounded-md">hello</button>
      <Button variant="destructive">Destructive</Button>
    </div>
    
  );
}
