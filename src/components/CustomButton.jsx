import React, { useState } from 'react';
import { Button } from "react-bootstrap";

export default function CustomButton() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
    <Button type="submit" variant="outline-danger" size="sm"  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>change Nickname</Button>
      {isShown && (
        <div className="warning">
          Will delete all messages!
        </div>
      )}
    </div>
  );
}

