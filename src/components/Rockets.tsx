import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from 'react';
import { fetchRockets } from "../redux/rockets/rocketsSlice";

const RocketComp = () => {
  const dispatch = useAppDispatch();
  const { rockets, error, loading } = useAppSelector((state: RootState) => state.rockets);

  useEffect(()=> {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  },
  [rockets.length]);

  if (error) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        An Error Occured
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        Loading
      </div>
    )
  }

  return (
    <>
      <h1 className="text-xl mx-auto font-semibold">Rockets</h1>
      {rockets && rockets.map(rocket => (
        <div className="flex flex-col space-x-4 space-y-4 my-3 max-w-[80%] mx-auto"
          key={rocket.id} data-testid={rocket.id}>
          <h3 className="text-lg font-light">{rocket.name} ({rocket.country}) - {rocket.company}</h3>
          <div className="flex flex-col md:flex-row space-y-2 bg-gray-100 p-3 rounded-xl">
            <img src={rocket.flickr_images[0]} 
              alt="avatar" 
              width={100} 
              height={100} />
              <p className="text-sm leading-loose text-justify ml-2">{rocket.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default RocketComp;
