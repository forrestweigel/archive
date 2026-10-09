"use client";
import * as React from "react";
import * as Primitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion = Primitive.Root;
export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Item>) {
  return (
    <Primitive.Item
      className={cn("border-b border-border", className)}
      {...props}
    />
  );
}
export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger
        className={cn(
          "flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-primary [&[data-state=open]>svg]:rotate-45",
          className,
        )}
        {...props}
      >
        {children}
        <Plus className="size-5 shrink-0 transition-transform" />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content className="overflow-hidden" {...props}>
      <div
        className={cn("pb-6 pr-10 leading-7 text-muted-foreground", className)}
      >
        {children}
      </div>
    </Primitive.Content>
  );
}
