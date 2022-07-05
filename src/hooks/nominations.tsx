import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as api from '../repository/api';
import { Data } from '../components/Table';

const useNomination = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    api.nominations()
      .then((nominationList) => {
        const formatData = nominationList.data.map(nomination => ({
          key: nomination.id,
          email: nomination.email,
          status: nomination.status,
          description: nomination.description,
          date: dayjs(nomination.dateReferred).format('MM-DD-YYYY'),
          involvement: nomination.score.involvement,
          talent: nomination.score.talent,
        }));
        setList(formatData);
        setLoading(false);
      })
      .catch((apiError: Error) => {
        setError(apiError);
        toast(t('nominations.error', 'Error retrieving nominations'), {
          type: 'error',
        });
      });
  }, [t]);

  return { data: list, isLoading, error };
};

export default useNomination;
