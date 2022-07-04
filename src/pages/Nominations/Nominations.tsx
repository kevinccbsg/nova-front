import Main from '../../layouts/Main';
import columns from './columns';
import Table from '../../components/Table';
import style from './Nominations.module.scss';

const Nominations = () => {
  const data = [
    {
      email: 'test@gmail.com',
      status: 'PENDING',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis expedita laudantium dolor velit explicabo consequatur optio nemo. Ducimus blanditiis quos ipsum! Dolor vero quidem aspernatur dicta, ea earum ipsum deleniti.',
      date: '20-12-2022',
      involvement: 3,
      talent: 2,
      key: '1',
    },
  ];

  return (
    <Main>
      <section className={style.container}>
        <h1 className={style.header}>Nominations</h1>
        <Table
          columns={columns}
          data={data}
          texts={{
            collapsed: 'collapse',
            expanded: 'expand',
          }}
        />
      </section>
    </Main>
  );
};

export default Nominations;
