import { makeStyles } from '@material-ui/styles';
import { Sidebar } from 'layouts/components';
import React, { useState, useEffect } from 'react';
import { ApiCardList, ApiDetail, SidebarNavigation } from './components';
import _ from 'lodash';
import data from './data/data.json';
import {useDebounce} from 'common/utils';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.container
  }
}));

const findApiDataById = (id) => {
  return data.find((e) => e.id == id)
}

// FIXME: random tags!!
const pricingData = [
  "무료",
  "부분유료",
  "유료"
];

const frequencyData = [
    "일중실시간",
    "일별",
    "히스토리"
];

const publisherData = [
  "코스콤",
  "BC카드",
  "위버플",
  "NICE",
  "기타"
];

const dataWithRandomTags = _.sortBy(data.map(row => 
  ({
    ...row,
    tags:[_.sample(pricingData), _.sample(frequencyData), _.sample(publisherData)]
  })
), [(o) => {return o.title}]);

const dataWithRandomTagsReversed = dataWithRandomTags.slice().reverse();

const Api = () => {
  const classes = useStyles();

  const [originalData, setOriginalData] = useState(dataWithRandomTags);
  const [apiListData, setApiListData] = useState(dataWithRandomTags);
  const [apiDetailData, setApiDetailData] = useState({});
  const [viewApiDetail, setViewApiDetail] = useState(false);

  // Save filter condition whenever coming back to this page from the others.
  const [filter, setFilter] = useState({
    showAdvance:false,
    keyword:"",
    sortAsc:true,
    pricing:[],
    frequency:[],
    publisher:[],
    category:""
  });

  const debouncedSearchTerm = useDebounce(filter.keyword, 500);

  const filterKeyword = (keyword, item) => {
    if(keyword){
      return item.includes(filter.keyword);
    } else {
      return true;
    }
  };

  const filterTags = (tags, item) => {
    if(tags.length !== 0) {
      return _.intersection(tags,item).length > 0
    } else {
      return true;
    }
  }

  const setFilteredData = (data) => {
    setApiListData(data
    .filter(o => 
      (filterKeyword(filter.keyword, o.title) || filterKeyword(filter.keyword, o.description)) &&
      filterTags(filter.pricing, o.tags) &&
      filterTags(filter.frequency, o.tags) &&
      filterTags(filter.publisher, o.tags)
    ));
  };

  useEffect(() => {
    if(filter.sortAsc) {
      setOriginalData(dataWithRandomTags);
      setFilteredData(dataWithRandomTags);
    } else {
      setOriginalData(dataWithRandomTagsReversed);
      setFilteredData(dataWithRandomTagsReversed);
    }
  }, [filter.sortAsc]);

  useEffect(() => setFilteredData(originalData),
    [debouncedSearchTerm, filter.pricing, filter.publisher, filter.frequency, filter.category]
  );

  const navigate = (id, category) => {
    if (id!==-1) {
      setApiDetailData(findApiDataById(id));
      setViewApiDetail(true);
    } else {
      setViewApiDetail(false);
      if(category) {
        setFilter({
          ...filter,
          category:category
        });
      }
    }
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={classes.root}>
      <Sidebar>
        <SidebarNavigation navigate={navigate} />
      </Sidebar>
      { viewApiDetail &&
        <ApiDetail navigate={navigate} data={apiDetailData}/>
      }
      { !viewApiDetail &&
        <ApiCardList data={apiListData} navigate={navigate} filter={filter} setFilter={setFilter} />
      }
    </div>
  );
};

export default Api;
