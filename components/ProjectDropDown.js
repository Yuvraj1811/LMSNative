import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

const ProjectDropDown = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://103.224.246.93:9092/api/v1/project/getall')
      .then(response => {if(!response.ok){

        throw new Error('Failed to fetch project')
      }
    return response.json()
    })
      .then(data => {
        setProjects(data.data);
        setSelectedProject(data.data[0]);
        setLoading(false)
      })
      .catch(error => {
        console.log('Error fetching problem: ', error);
        setError(error)
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View
      style={{
        marginTop: 20,
        alignItems: 'center',
        borderWidth: 1.5,
        height: 57.5,
        width: 303,
        alignSelf: 'center',
        borderColor: '#07009E',
      }}>
      <Picker
        dropdownIconColor="#FFFFFF"
        style={{height: 50, width: 300, backgroundColor: '#07009E'}}
        selectedValue={selectedProject}
        onValueChange={(itemValue, itemIndex) => setSelectedProject(itemValue)}>
        {projects.map(project => (
          <Picker.Item
            style={styles.textStyle}
            label={project.projectTitle}
            value={project}
            key={project.id}
          />
        ))}
      </Picker>
    </View>
  );
};

export default ProjectDropDown;

const styles = StyleSheet.create({
  textStyle: {
    color: '#07009E',
    fontFamily: 'Nunito-Medium',
    backgroundColor: 'white',
  },
});
