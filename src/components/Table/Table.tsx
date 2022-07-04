import Table from 'rc-table';
import style from './Table.module.scss';
import { TableProps } from './Table.model';

const TableComponent = ({ columns, data, texts }: TableProps) => {
  return (
    <div className={style.container}>
      <Table
        sticky
        expandable={{
          expandRowByClick: true,
          expandedRowRender: record => <p>{record.description}</p>,
          expandIcon: (props) => (
            <a
              className="expand-row-icon"
              onClick={e => {
                props.onExpand(props.record, e);
              }}
              style={{ color: 'blue', cursor: 'pointer' }}
            >
              {props.expanded ? texts.collapsed : texts.expanded}
            </a>
          ),
        }}
        scroll={{ x: 800 }}
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default TableComponent;
