import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Greece</TableCell>
                <TableCell>20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Portugal</TableCell>
                <TableCell>18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>United Kingdom</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Azerbaijan</TableCell>
                <TableCell>80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Finland</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>France</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
