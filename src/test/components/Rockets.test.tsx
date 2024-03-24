import RocketComp from "../../components/Rockets";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import store from "../../redux/store";
import rocketsSlice, { State } from "../../redux/rockets/rocketsSlice";
import { fetchRockets } from "../../redux/rockets/rocketsSlice";

const customInitialState: State = {
  rockets: [
    {
        id: '1',
        name: 'One',
        country: 'Kenya',
        description: 'Kenya Rocket',
        company: 'Umoja rockets',
        flickr_images: ['http://flickr.com/1']
    },
    {
        id: '2',
        name: 'Two',
        country: 'Uganda',
        description: 'Uganda Rocket',
        company: 'Umoja2 rockets',
        flickr_images: ['http://flickr-uganda.com/1']
    },
  ],
  error: undefined,
  loading: false,
}

describe('Rocket Component', ()=>{
  describe('=> Rendering', ()=>{
    it('Renders correctly with initial state empty', ()=>{
      render(
      <Provider store={store}>
        <RocketComp/>
      </Provider>)
      const title = screen.getByText(/Loading/i)
      expect(title).toBeInTheDocument();
    })

    it('Renders correctly with rocket state data', async()=>{
        await store.dispatch({
            type: 'rockets/fetchRockets/fulfilled',
            payload: customInitialState.rockets,
          });
          
          render(
            <Provider store={store}>
              <RocketComp />
            </Provider>,
          );

          const rocketOneTitle = await screen.getByText(/Loading/i);
          expect(rocketOneTitle).toBeInTheDocument();
      })
  })
})