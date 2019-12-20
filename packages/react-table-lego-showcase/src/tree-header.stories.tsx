import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table, Tbody, Tr, Td, ColProps } from 'react-table-lego-brick';
import { TreeHeader, HeaderObj, HeaderTree } from 'react-table-lego-works';

interface Props {
  columns: Array<ColProps | null>;
  headers: Array<HeaderObj>;
  data: Array<{ x: string; y: string; z: string }>;
}

const TreeHeaderTable: React.FunctionComponent<Props> = (props: Props) => {
  const headerTree = HeaderTree.fromHeaders(props.headers);

  return (
    <Table>
      <TreeHeader columns={ props.columns } headerTree={ headerTree } />

      <Tbody>
        {
          props.data.map((item, i) => {
            return (
              <Tr key={ i }>
                <Td>{ item.x }</Td>
                <Td>{ item.y }</Td>
                <Td>{ item.z }</Td>
              </Tr>
            );
          })
        }
      </Tbody>
    </Table>
  );
};

storiesOf('Headers/TreeHeader', module)
  .add('Depth = 1', () => {
    const columns = [
      { style: { width: 100 } },
      null,
      { style: { width: 200 } },
    ];
    const headers = [
      { id: '1', name: 'X' },
      { id: '2', name: 'Y' },
      { id: '3', name: 'Z' },
    ];
    const data = [{ x: 'x', y: 'y', z: 'z' }];

    return (<TreeHeaderTable columns={ columns } headers={ headers } data={ data } />);
  });
