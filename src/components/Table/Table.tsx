import Table from 'rc-table';
import style from './Table.module.scss';
import { TableProps } from './Table.model';

const TableComponent = ({
  columns, data, dataCy, texts,
}: TableProps) => (
    <div className={style.container}>
      <Table
        sticky
        data-cy={dataCy}
        expandable={{
          expandRowByClick: true,
          expandedRowRender: record => <p>{record.description}</p>,
          expandIcon: props => (
            <button
              className={style.expandRowIcon}
              data-cy="table-expand-button"
              onClick={(e) => {
                props.onExpand(props.record, e);
              }}
            >
              {props.expanded ? texts.collapsed : texts.expanded}
            </button>
          ),
        }}
        scroll={{ x: 800 }}
        columns={columns}
        data={data}
      />
    </div>
);

export default TableComponent;
