import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useUserContext } from '../../../hooks/UserContex';
import useFetch from '../../../hooks/useFetch';
import { findAvgScore, findUserScore } from '../../../functions/scoreService';

export const BuildRating = ({ isAvg, id }) => {
  const [rating, setRating] = useState(0);
  const { user } = useUserContext();
  const { fetchData, data } = useFetch();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const url = 'http://localhost:8080/api/getpcbuildbyid';
          await fetchData(
            url,
            'post',
            { id },
            { 'Authorization': 'Bearer ' + user.token }
          );
        } catch (error) {
          console.error('Error occurred during fetching:', error);
        }
      })();
    }
  }, [user, id, isAvg]);

  const handleRating = async (rate) => {
    setRating(rate);

    if (user && !isAvg && rate > 0) {
      try {
        await fetchData(
          'http://localhost:8080/api/scorepcbuild',
          'post',
          {
            id,
            username: user.username,
            score: rate,
          },
          { 'Authorization': 'Bearer ' + user.token }
        );
        window.location.reload();
      } catch (error) {
        console.error('Error occurred during fetching:', error);
      }
    }
  };

  const initialRating = isAvg
    ? data ? findAvgScore(data.scores) : 0
    : data ? findUserScore(data.scores, user.username) : 0;

  return (
    <div>
      <Rating
        onClick={handleRating}
        size={36}
        allowFraction={isAvg}
        readonly={isAvg}
        initialValue={initialRating}
        fillColor={isAvg ? '#f1a545' : '#3b82f6'}
      />
    </div>
  );
};
