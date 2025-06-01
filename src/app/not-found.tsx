import { Button } from "@/components/ui/button";
import FallingText from "@/TextAnimations/FallingText/FallingText";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <FallingText
        text={`404`}
        highlightWords={["404"]}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="8rem"
        mouseConstraintStiffness={0.9}
      />
      <Link className="hover:cursor-pointer" href={"/"}>
        <Button>Torna alla pagina principale</Button>
      </Link>
      <FallingText
        text={`La pagina che stai cercando non esiste :(`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
}
