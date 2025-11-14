import { useState } from "react";
import { MultiCheckbox } from "./components/multi-checkbox";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export default function App() {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  return (
    <div className="app">
      <div className="form-container">
        <MultiCheckbox
          allLabel="All pages"
          options={["Page 1", "Page 2", "Page 3", "Page 4"]}
          value={selectedPages}
          onChange={setSelectedPages}
        />
        <Separator />
        <div className="form-container__footer">
          <Button onClick={() => {}}>Done</Button>
        </div>
      </div>
    </div>
  );
}
