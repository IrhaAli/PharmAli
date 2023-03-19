import axios from "axios";
import { useState, useEffect } from 'react'

export default function useApplicationData(DRUG, HOME) {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const [drugContent, setDrugContent] = useState("");
  const [user, setUser] = useState();
  const [blogContent, setBlogContent] = useState();

  const onSearchSubmit = (text) => {
    return Promise.all([
      axios.get(`https://api.fda.gov/drug/label.json?search=description:${text}`)
    ]).then((data) => {
      setPage(DRUG);
      setDrugContent(data);
    })
  }

  const setCookie = (email, password, name = null, postal_code = null) => {
    const obj = (name) ? { email, password, name, postal_code } : { email, password };
    return axios.post("/user/add", obj)
      .then((data) => {
        const success = data.data.message;
        if (success) {
          setUser(email)
        }
        return success;
      })
  };

  const removeCookie = () => {
    return axios.post("/user/remove")
      .then(() => { setUser("") })
  };

  useEffect(() => {
    Promise.all([
      axios.get('/user'),
    ]).then((data) => {
      setUser(data[0].data.message);
    })
  }, []);


  return { page, menu, user, blogContent, drugContent, setMenu, setPage, setCookie, removeCookie, onSearchSubmit, setBlogContent }
}