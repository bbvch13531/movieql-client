import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {MOVIE_PAGE} from "./queries";
import Movie from "./Movie";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`;

const Home = () => (
    <Container>
        <Helmet>
            <title>Home | MovieQL</title>
        </Helmet>
        <Query query={MOVIE_PAGE}>
        {
            ({ loading, data, error }) => {
                if(loading) 
                    return "loading";
                if(error)
                    return "something happened";
                
                return data.movies.map(movie => (
                    <Movie 
                        id={movie.id}
                        key={movie.id}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                    />
                ));
            }
        }
        </Query>
    </Container>
)

export default Home;
