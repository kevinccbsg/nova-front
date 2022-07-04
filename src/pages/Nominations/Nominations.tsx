import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../../layouts/Main';
import columns from './columns';
import { ROUTES } from '../../constants';
import Table, { Data } from '../../components/Table';
import * as api from '../../repository/api';
import Button from '../../components/Button';
import style from './Nominations.module.scss';

const Nominations = () => {
  const [list, setList] = useState<Data[]>([]);
  useEffect(() => {
    api.nominations()
      .then((nominationList) => {
        const formatData = nominationList.data.map(nomination => ({
          key: nomination.id,
          email: nomination.email,
          status: nomination.status,
          description: nomination.description,
          date: nomination.dateReferrer,
          involvement: nomination.score.involvement,
          talent: nomination.score.talent,
        }));
        setList(formatData);
      });
  }, []);

  return (
    <Main>
      <section className={style.container}>
        <h1 className={style.header}>Nominations</h1>
        <Link to={ROUTES.NOMINATE}>
          <Button data-cy="new-nomination-button" type="submit" theme="primary">
            Nominate
          </Button>
        </Link>
        <Table
          columns={columns}
          dataCy="nominations-table"
          data={list}
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
