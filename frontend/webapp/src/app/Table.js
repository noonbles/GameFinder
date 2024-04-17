import React from 'react';
import useSWR from 'swr';

export default function Table() {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error, isLoading} = useSWR("localhost:8000/games", fetcher)


    if(error){ return error }
  return (
    <div className="flex justify-center items-center">
      <table className="table w-1/2">
        <tbody>
             {data.map((e, index) => (
            <tr className="h-10" key={e}>
              <td>{`${index}. ${e}`}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
