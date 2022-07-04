import { TFunction } from 'react-i18next';

const columns = (t: TFunction<"translation", undefined>) => [
  {
    title: t('nominations.table.email', 'email'),
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: t('nominations.table.status', 'status'),
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: t('nominations.table.date', 'date'),
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: t('nominations.table.involvement', 'involvement'),
    dataIndex: 'involvement',
    key: 'involvement',
  },
  {
    title: t('nominations.table.talent', 'talent'),
    dataIndex: 'talent',
    key: 'talent',
  },
];

export default columns;
