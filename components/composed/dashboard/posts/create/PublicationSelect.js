import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
} from "@/components/primitives/Select"
import capitalize from "@/utils/capitalize"
import { Publication } from "@prisma/client"

import { Controller } from "react-hook-form"

const PublicationSelect = ({ control, publication }) => (
  <div className="flex gap-3">
    <Controller
      control={control}
      name="publication"
      render={({ field }) => (
        <Select {...field} placeholder="Select a publication">
          <SelectGroup>
            <SelectGroupLabel>Publication</SelectGroupLabel>
            {Object.keys(Publication).map(key => (
              <SelectItem
                value={key}
                text={capitalize(key)}
                key={`select-${key}`}
              />
            ))}
          </SelectGroup>
        </Select>
      )}
    />
    <pre>{JSON.stringify(publication)}</pre>
  </div>
)

export default PublicationSelect
