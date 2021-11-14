/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ActivityIndicator, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { listGenres } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

// { fetchGenresRequest, fetchGenresSuccessful,  }

import { AppText, GenrePickerCard } from ".";
import globalStyles from "../../globalStyles";
import { fetchGenresRequest, fetchGenresSuccessful, fetchGenresFailed } from "../features/songs/songGenresSlice";

const GenreModal = ({ modalOpen, setModalOpen, setSelectedGenreID }) => {

    const { loading, genres, error} = useSelector(state => state.allGenres)

    const [ allGenres, setAllGenres ] = React.useState([])


    const dispatch = useDispatch();

    React.useEffect(() => {
        fetchGenres()
    },[])

    const fetchGenres = async() => {
        dispatch(fetchGenresRequest())
        try{
            const allGenres = await API.graphql(graphqlOperation(listGenres));
            setAllGenres(allGenres.data.listGenres.items)
            dispatch(fetchGenresSuccessful(allGenres.data.listGenres.items))
        }catch(err) {
            console.log("Error song fetch: ", err.message)
            dispatch(fetchGenresFailed(err.message))
        }
    }


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
      >
        <View style={styles.header}>
            <AppText {...styles.headerText}>Pick a genre for your song</AppText>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalOpen(false)}
              >
              <Text style={styles.textStyle}>Done</Text>
          </Pressable>
        </View>
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                   

                        {
                            !error && (
                                loading ? <ActivityIndicator size={14} color="#fff" /> : 

                                (
                                    allGenres.map(item => 
                                        <GenrePickerCard key={item.id} item={item} setSelectedGenreID={setSelectedGenreID} />
                                    )  
                                )
                            )
                        }

                           
                    
                </View>
            </View>
        
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "700",
  },
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 24,
    backgroundColor: globalStyles.purpleDark,
    paddingHorizontal: 15
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: globalStyles.purpleDark,
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default GenreModal;