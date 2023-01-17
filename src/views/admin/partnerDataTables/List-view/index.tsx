//Chakra UI Components
import {
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

// Custom components
import Card from 'components/card/Card'
import { tableDataSchema } from 'views/admin/partnerDataTables/List-view/tableDataSchema'
import { PartnerTable } from 'views/admin/partnerDataTables/index'

interface ListViewProps {
  data: PartnerTable[]
}

export const PartnerList: React.FC<ListViewProps> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const columnHelper = createColumnHelper<PartnerTable>()
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  // console.log('data', data);

  const columns = tableDataSchema.map((item) =>
    columnHelper.accessor(item.key as keyof PartnerTable, {
      id: item.key,
      header: () => (
        <Text
          justifyContent={'space-between'}
          align={'center'}
          fontSize={{ sm: '10px', lg: '12px' }}
          color={'gray.400'}
        >
          {item.name}
        </Text>
      ),
      cell: (info: any) => {
        // console.log({info});

        return (
          <Flex align="center">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
          </Flex>
        )
      },
    }),
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  // console.log(table.getCoreRowModel().rows);

  return (
    <Stack>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Card
          flexDirection="column"
          w="100%"
          px="0px"
          overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
          <Table variant="simple" color="gray.500" mb="24px" mt="12px">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        pe="10px"
                        borderColor={borderColor}
                        cursor="pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Flex
                          justifyContent="space-between"
                          align="center"
                          fontSize={{ sm: '10px', lg: '12px' }}
                          color="gray.400"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: '',
                            desc: '',
                          }[header.column.getIsSorted() as string] ?? null}
                        </Flex>
                      </Th>
                    )
                  })}
                </Tr>
              ))}
            </Thead>

            <Tbody>
              {table.getRowModel().rows.map((row) => {
                // console.log('row', row.id);

                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      // console.log('cell', row.getVisibleCells)

                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: '14px' }}
                          minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                          borderColor="transparent"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Card>
      </Flex>
    </Stack>
  )
}
