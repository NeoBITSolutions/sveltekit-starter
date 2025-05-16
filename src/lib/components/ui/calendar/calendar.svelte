<script lang="ts">
  import { Button, Calendar, Select } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { DateFormatter, getLocalTimeZone } from "@internationalized/date";
  import { X } from "@lucide/svelte";
  import { Calendar as CalendarPrimitive, type WithoutChildrenOrChild } from "bits-ui";

  let {
    ref = $bindable(null),
    value = $bindable(),
    placeholder = $bindable(),
    class: className,
    weekdayFormat = "short",
    onValueChange,
    type,
    ...restProps
  }: WithoutChildrenOrChild<CalendarPrimitive.RootProps> = $props();

  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month, i) => ({ value: String(i + 1), label: month }));
  const monthFmt = new DateFormatter("en-US", {
    month: "long",
  });
  const yearOptions = Array.from({ length: 100 }, (_, i) => ({
    label: String(new Date().getFullYear() - i),
    value: String(new Date().getFullYear() - i),
  }));
  const defaultYear = $derived(
    placeholder ? { value: String(placeholder.year), label: String(placeholder.year) } : undefined
  );
  const defaultMonth = $derived(
    placeholder
      ? {
          value: String(placeholder.month),
          label: monthFmt.format(placeholder.toDate(getLocalTimeZone())),
        }
      : undefined
  );
  const monthLabel = $derived(
    monthOptions.find((m) => m.value === defaultMonth?.value)?.label ?? "Select a month"
  );
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<CalendarPrimitive.Root
  bind:value={value as never}
  bind:ref
  bind:placeholder
  {weekdayFormat}
  onValueChange={onValueChange as never}
  {type}
  class={cn("p-3", className)}
  {...restProps}>
  {#snippet children({ months, weekdays })}
    <Calendar.Header>
      <Calendar.Heading class="flex w-full items-center justify-between gap-2">
        <Calendar.PrevButton />
        <Select.Root
          type="single"
          value={defaultMonth?.value}
          onValueChange={(v) => {
            if (!placeholder) return;
            if (v === `${placeholder.month}`) return;
            placeholder = placeholder.set({ month: Number.parseInt(v) });
          }}>
          <Select.Trigger aria-label="Select month" class="w-[60%]">
            {monthLabel}
          </Select.Trigger>
          <Select.Content class="max-h-[200px] overflow-y-auto">
            {#each monthOptions as { value, label }}
              <Select.Item {value} {label} />
            {/each}
          </Select.Content>
        </Select.Root>
        <Select.Root
          type="single"
          value={defaultYear?.value}
          onValueChange={(v) => {
            if (!v || !placeholder) return;
            if (v === `${placeholder?.year}`) return;
            placeholder = placeholder.set({ year: Number.parseInt(v) });
          }}>
          <Select.Trigger aria-label="Select year" class="w-[40%]">
            {defaultYear?.label ?? "Select year"}
          </Select.Trigger>
          <Select.Content class="max-h-[200px] overflow-y-auto">
            {#each yearOptions as { value, label }}
              <Select.Item {value} {label} />
            {/each}
          </Select.Content>
        </Select.Root>
        {#if value}
          <Button
            size="icon"
            onclick={() => {
              value = undefined;
              onValueChange && onValueChange(undefined as never);
            }}><X /></Button>
        {/if}
        <Calendar.NextButton />
      </Calendar.Heading>
    </Calendar.Header>
    <Calendar.Months>
      {#each months as month (month)}
        <Calendar.Grid>
          <Calendar.GridHead>
            <Calendar.GridRow class="flex">
              {#each weekdays as weekday (weekday)}
                <Calendar.HeadCell>
                  {weekday.slice(0, 2)}
                </Calendar.HeadCell>
              {/each}
            </Calendar.GridRow>
          </Calendar.GridHead>
          <Calendar.GridBody>
            {#each month.weeks as weekDates (weekDates)}
              <Calendar.GridRow class="mt-2 w-full">
                {#each weekDates as date (date)}
                  <Calendar.Cell {date} month={month.value}>
                    <Calendar.Day />
                  </Calendar.Cell>
                {/each}
              </Calendar.GridRow>
            {/each}
          </Calendar.GridBody>
        </Calendar.Grid>
      {/each}
    </Calendar.Months>
  {/snippet}
</CalendarPrimitive.Root>
