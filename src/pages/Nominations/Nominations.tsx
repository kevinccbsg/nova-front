import Table from 'rc-table';
import Main from '../../layouts/Main';
import style from './Nominations.module.scss';

const Nominations = () => {
  const columns = [
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'score',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  const data = [
    {
      email: 'test@gmail.com',
      status: 'PENDING',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita laudantium dolor velit explicabo consequatur optio nemo. Ducimus blanditiis quos ipsum! Dolor vero quidem aspernatur dicta, ea earum ipsum deleniti.',
      date: '20-12-2022',
      score: 1,
      key: '1',
    },
  ];
  

  return (
    <Main>
      <section className={style.container}>
        <h1 className={style.header}>Nominations</h1>
        <Table
          sticky
          expandable={{
            expandRowByClick: true,
            expandedRowRender: record => <p>description: {record.description}</p>,
            expandIcon: (props) => {
              let text;
              if (props.expanded) {
                text = '&#8679; collapse';
              } else {
                text = '&#8681; expand';
              }
              return (
                <a
                  className="expand-row-icon"
                  onClick={e => {
                    props.onExpand(props.record, e);
                  }}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: text }}
                  style={{ color: 'blue', cursor: 'pointer' }}
                />
              );
            },
          }}
          scroll={{ x: 600 }}
          columns={columns}
          data={data}
        />
      </section>
    </Main>
  );
};

export default Nominations;
