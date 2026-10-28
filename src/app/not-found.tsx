import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title={["Out of", "bounds."]}>
      <ButtonLink href="/">Back to the clubhouse</ButtonLink>
    </PageHeader>
  );
}
