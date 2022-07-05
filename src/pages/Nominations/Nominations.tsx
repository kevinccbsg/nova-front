import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Main from '../../layouts/Main';
import columns from './columns';
import { ROUTES } from '../../constants';
import Table from '../../components/Table';
import useNomination from '../../hooks/nominations';
import Button from '../../components/Button';
import style from './Nominations.module.scss';

const Nominations = () => {
  const { t } = useTranslation();
  const { data: list, isLoading } = useNomination();
  return (
    <Main loading={isLoading}>
      <section className={style.container}>
        <h1 className={style.header}>{t('nominations.title', 'Nominations')}</h1>
        <Link to={ROUTES.NOMINATE}>
          <Button data-cy="new-nomination-button" type="submit" theme="primary">
            {t('nominations.button', 'nominate')}
          </Button>
        </Link>
        <Table
          columns={columns(t)}
          dataCy="nominations-table"
          data={list}
          texts={{
            collapsed: t('nominations.table.collapsed', 'collapse'),
            expanded: t('nominations.table.expanded', 'expand'),
          }}
        />
      </section>
    </Main>
  );
};

export default Nominations;
