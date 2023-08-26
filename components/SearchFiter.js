import { SegmentedButtons } from "react-native-paper";
import { useState } from "react";

export default function SearchFilter({ value, setValue }) {
    return (
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                  value: "search",
                  label: "search",
              },
              {
                  value: "top",
                  label: "top-airing",
              },
              {
                  value: "genre",
                  label: "genre",
              },
            ]}
        />
    );
}
