import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export default function TeamList({
  members,
  userId
}: {
  members: any[];
  userId: number | null | undefined;
}) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-0 sm:p-2 md:p-4">
      <h1 className="text-xl font-bold">Team Members</h1>
      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Volle naam</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Huidige rol</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member: any) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium w-48 inline-flex items-center">
                  {member.firstname + ' ' + member.lastname}
                  {member.id === userId && (
                    <div className="ml-2 bg-green-300 rounded-md px-1">
                      <h1 className="text-green-500 text-sm font-bold text-center">
                        You
                      </h1>
                    </div>
                  )}
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.role.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
