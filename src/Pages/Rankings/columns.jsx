/* eslint-disable no-unused-vars */
import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper();

export const columnDef = [
columnHelper.accessor("rank",{
    header: "Rank"
}),
columnHelper.accessor("name",{
    header: "Player"
}),
columnHelper.accessor("position",{
    header: "Position"
}),
columnHelper.accessor("team",{
    header: "Team"
}),
]