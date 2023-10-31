import { createClient } from "@supabase/supabase-js";
// import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function checkUser(id){
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('u_id', id)
  // console.log(data)
  // return data;
    if(error){
      return (0)
    }
    if(data.length > 0){
      return (1)
    }else{
      return (2)
    }
}

export async function fetchFromSupabase() {
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('users')
    .select();
  // console.log(data);
}

export async function createUser(email, u_id, name){
  const val = await checkUser(u_id)
  if(val === 1){
    return;
  }
  if(val === 2){
    const { data, error } = await supabase
    .from('users')
      .insert([
        { 'u_id': u_id, 'email': email, 'name': name }
      ])
      .select()
      if(error){
      return (0)
    }
    if(data.length > 0){
      return (1)
    }else{
      return (2)
    }
  }
          
}

export async function getWallet(id, name){
  const { data, error } = await supabase
  .from('wallet')
    .select('*')
    .eq('w_id', id)
    .eq('name', name)
    return data;
}

export async function setWallet(id, name, amount){
  const coin =await getWallet(id, name)
  if(coin.length > 0){
    const { data, error } = await supabase
    .from('wallet')
    .update({amount: amount})
      .eq('w_id', id)
      .eq('name', name)
       return(data)
  }else{
    const { data, error } = await supabase
    .from('wallet')
      .insert([
        { w_id: id, name: name, amount: amount  }
      ])
      .select()
       return(data)
  }
}

export async function createwithdrawal(amount, u_id){
  // const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
    .from('withdraws')
      .insert([
        { w_id: u_id, amount: amount  }
      ])
      .select()
}

export async function createdeposit(amount, u_id){
  // const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
    .from('deposit')
      .insert([
        { d_id: u_id, amount: amount  }
      ])
      .select()
}

export async function getAccount(acc, u_id, id){
    const { data, error } = await supabase
    .from(acc)
    .select('*')
    .eq(u_id, id)
  // console.log(data)
  return data;
}

export async function createBalance(b_id, amount){
      const val =await getAccount('balance', 'b_id', b_id)
      if(val.length > 0){
        return
      }else{
      const { data, error } = await supabase
    .from('balance')
          .insert([
        { b_id: b_id, amount: amount}
      ])
      .select()
      return data; 

      }
}

export async function checkBalance(b_id){
    const { data, error } = await supabase
    .from('balance')
      .select('*')
      .eq('b_id', b_id)
      return data;
}

export async function updateBalance(b_id, amount){
    const { data, error } = await supabase
    .from('balance')
      .update({amount: amount})
      .eq('b_id', b_id)
      return data;
}

export async function inbox() {
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('inbox')
    .select();
  return(data);
}

export async function createInbox(msg, u_id) {
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('inbox')
    .insert([
        { i_id: u_id,  msg: msg  }
      ])
      .select()
  console.log(data);
}

export async function getTrade(id) {
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('trade')
    .select('*')
    .eq('t_id', id)
  return data;
}


export async function createTrade(u_id, type, amount, exchange_rate, previous_close, from, to, balance, cost){
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('trade')
    .insert([
        {
        type: type,
         amount: amount,
         exchange_rate: exchange_rate,
         previous_close: previous_close,
         from: from,
         to: to,
         balance: balance,
         t_id: u_id,
         cost: cost }
      ])
      .select()
      if(error){
      return (0)
    }
    if(data.length > 0){
      return (1)
    }else{
      return (2)
    }
  // console.log(data); 
}

const supabaseClient = async (supabaseAccessToken) => {
    const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_KEY, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    // set Supabase JWT on the client object,
    // so it is sent up with all Supabase requests
    return supabase;
  };
  // export default supabaseClient;

  export async function fetchData (getToken){
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: 'supabase' });
 
    const supabase = await supabaseClient(supabaseAccessToken);
    
    // TODO #2: Replace with your database table name
    
    const { data, error } = await supabase.from('users').select();
    console.log(data); 
    // TODO #3: Handle the response
  };

export async function findRecordById (getToken,table, id){
  const supabaseAccessToken = await getToken({ template: 'supabase' });
 
    const supabase = await supabaseClient(supabaseAccessToken);
    

  const { data, error } = await supabase
    .from(table) // Replace 'table' with the name of your table
    .select('*') // Select all columns or specify the columns you need
    .eq('id', id); // Replace 'id' with the name of the column containing the ID

  if (error) {
    console.error('Error finding record:', error);
    // Handle the error appropriately, e.g., show an error message to the user.
  } else {
    if (data && data.length > 0) {
      const record = data[0]; // The first record found with the specified ID
      console.log('Record found:', record);
      // You can now work with the record.
    } else {
      console.log('Record not found.');
      // Handle the case where the record with the specified ID was not found.
    }
  }
};
  // export default fetchData;

export async function updateItem ({ item, id }){
    setLoading(true);
    try {
      const user = supabase.auth.user();

      const { error } = await supabase
        .from("todo")
        .update({ item })
        .eq("userId", user?.id)
        .eq("id", id); //matching id of row to update

      if (error) throw error;

      await getActiveItems();
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };