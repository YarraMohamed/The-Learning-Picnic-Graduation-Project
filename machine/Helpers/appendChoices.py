import random

def append_element_at_index(lst, element):
    index = random.randint(0, 3)
    lst.insert(index, element)
    return lst
